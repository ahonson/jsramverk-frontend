import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    user: string;
    chatPage: string;
    message: string;
    messages: string[] = [];

    constructor(private chatService: ChatService) { }

    // ngOnInit(): void {
    // }
    //

    getUser() {
        console.log("42");
        this.chatPage = "msg";
        var curr = new Date();
        var myTime = curr.getHours().toString().padStart(2, "0") + ":" + curr.getMinutes().toString().padStart(2, "0") + ":" + curr.getSeconds().toString().padStart(2, "0");
        // var myJSON = {
        //     time: myTime,
        //     name: this.user
        // };
        this.chatService.sendMessage(this.user.toUpperCase() + " anslöt sig till chatten kl " + myTime);
    }

    sendMessage() {
        var curr = new Date();
        var myTime = curr.getHours().toString().padStart(2, "0") + ":" + curr.getMinutes().toString().padStart(2, "0") + ":" + curr.getSeconds().toString().padStart(2, "0");
        var line = "[kl " + myTime + "] " + this.user + " skrev: " + this.message;
        var myJSON = {
            time: myTime,
            name: this.user,
            msg: this.message
        };
        // this.chatService.sendMessage(line);
        this.chatService.sendMessage(myJSON);
        // console.log(this.message);
        this.message = '';
    }

    ngOnInit() {
        this.chatService
        .getMessages()
        .subscribe((message) => {
            // console.log("..........................");
            // console.log(typeof message);
            // console.log("::::::::::::::::::::::::::");

            if (typeof message === "string") {
                this.messages.push(message);
            } else {
                this.messages.push("[kl " + message.time + "] " + message.name + " skrev: " + message.msg);
            }
            // this.messages.push(message.msg);
        });
        this.chatPage = "user";
    }

    ngAfterViewChecked() {
        const allMessages = document.getElementById("all-messages");
        allMessages.scrollTop = allMessages.scrollHeight;
    }

    // ngAfterContentChecked() {
    //     const allMessages = document.getElementById("all-messages");
    //     for (var i = 0; i < allMessages.children.length; i++) {
    //         console.log(i, "YESYES", allMessages.children[i].innerHTML);
    //     }
    // }
}
