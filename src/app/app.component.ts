import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // readonly ROOT_URL = "http://api.kolada.se/v2/municipality?title=karlskrona";
    // // posts = this.http.get(this.ROOT_URL);
    // adat: any;
    // constructor(private http: HttpClient) {
    //     this.http.get(this.ROOT_URL).toPromise().then(data => {
    //         this.adat = data;
    //     });
    // }
    // posts: any;
    // getPosts() {
    //     this.http.get(this.ROOT_URL).subscribe((data) => {
    //         this.posts = data;
    //     });
    // }
    title: 'me-app-ng';
}
