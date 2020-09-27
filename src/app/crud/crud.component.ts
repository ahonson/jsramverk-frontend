import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharetokenService } from "../sharetoken.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

    mytext: any;
    currenttext: any;
    chosenReport = "1";
    token: string;
    // token = "";
    readonly REPORT_URL = "http://localhost:1337/reports/week/";
    readonly SAVE_URL = "http://localhost:1337/reports";

    constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService) {
        this.http.get(this.REPORT_URL + this.chosenReport).toPromise().then(data => {
            this.mytext = data;
            this.currenttext = this.mytext.report;
        });
        console.log("_____________________________________");

        console.log(this.chosenReport, this.mytext);
    }

    newReport() {
        this.http.get(this.REPORT_URL + this.chosenReport).toPromise().then(data => {
            this.mytext = data;
            this.currenttext = this.mytext.report;
            console.log(this.chosenReport, this.mytext);
        });
        console.log("_____________________________________");


        console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("this is new");
    }

    saveReport() {
        console.log("SAVE ME __________________________________");
        console.log(this.token, this.currenttext);
        console.log("Kmom" + this.chosenReport.padStart(2, "0"));

        this.http.post(this.SAVE_URL, {
            token: this.token,
            name: "Kmom" + this.chosenReport.padStart(2, "0"),
            report: this.currenttext
        }).subscribe();
    }

    // ngOnInit(): void {
    // }

    ngOnInit() {
        this.tokenValue.currentToken.subscribe(token => this.token = token);
        if (this.token.length < 5) {
            this.router.navigate(['login']);
            console.log("CRUD.COMPONENT.JS, token:", this.token);

        }
    }
}
