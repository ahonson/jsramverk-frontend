import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    message: string;
    messages: string[] = [];

    constructor(private chatService: ChatService) { }

    // ngOnInit(): void {
    // }
    //
    sendMessage() {
        this.chatService.sendMessage(this.message);
        console.log(this.message);
        this.message = '';
    }

    ngOnInit() {
        this.chatService
        .getMessages()
        .subscribe((message: string) => {
          this.messages.push(message);
        });
    }

    ngAfterViewChecked() {
        const allMessages = document.getElementById("all-messages");
        allMessages.scrollTop = allMessages.scrollHeight;
    }
}
