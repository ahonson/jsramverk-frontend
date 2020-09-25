import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private http: HttpClient, private router: Router) {}

    submitted = false;
    // model = new Login("NEV", "CIM");

    email = "";
    password = "";
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
        }).subscribe();

        this.router.navigate(['about']);
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

    ngOnInit(): void {
    }
}
