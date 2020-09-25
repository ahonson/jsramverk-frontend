import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
    // readonly ROOT_URL = "http://api.kolada.se/v2/municipality?title=karlskrona";
    readonly ROOT_URL = "http://localhost:1337/";
    // posts = this.http.get(this.ROOT_URL);
    adat: any;
    constructor(private http: HttpClient) {
        this.http.get(this.ROOT_URL).toPromise().then(data => {
            this.adat = data;
        });
    }

    ngOnInit(): void {
    }
}
