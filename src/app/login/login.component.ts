import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../login';
import { SharetokenService } from "../sharetoken.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService) {}

    submitted = false;
    loginPage = "login";
    // model = new Login("NEV", "CIM");

    email = "";
    password = "";
    response: any;
    token: string;
    // token = "";
    readonly LOGIN_URL = "http://localhost:1337/login";
    readonly REGISTER_URL = "http://localhost:1337/register";
    adat: any;

    onSubmit() {
        this.submitted = true;
        console.log("hejhopp");
    }

    login() {
        console.log("login - hejhopp");
        this.submitted = true;

        console.log(this.email);
        console.log(this.password);

        this.http.post(this.LOGIN_URL, {
            email: this.email,
            password: this.password
        }).subscribe(data => {
            this.response = data;
            this.token = this.response.data.token;
            console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
            console.log(this.response);
            console.log(this.token);
            this.tokenValue.changeToken(this.token);
            if (this.token.length > 4) {
                this.router.navigate(['crud']);
            }
        });
    }


    register() {
        console.log("register - hejhopp");
        this.submitted = true;

        console.log(this.email);
        console.log(this.password);

        this.http.post(this.REGISTER_URL, {
            email: this.email,
            password: this.password
        }).subscribe();
    }

    // onSubmit() {
    //     console.log("U BOJ!!!!!!!!!!!!!!!!");
    // }

    // ngOnInit(): void {
    // }

    ngOnInit() {
        this.tokenValue.currentToken.subscribe(token => this.token = token);
        console.log("LOGIN.COMPONENT.JS, token:", this.token);

    }
}
