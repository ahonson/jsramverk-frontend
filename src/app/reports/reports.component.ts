import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

    readonly KMOM_ETT = "http://localhost:1337/reports/week/1";
    readonly KMOM_TVA = "http://localhost:1337/reports/week/2";
    // posts = this.http.get(this.ROOT_URL);
    adat_01: any;
    adat_02: any;
    constructor(private http: HttpClient) {
        this.http.get(this.KMOM_ETT).toPromise().then(data_01 => {
            this.adat_01 = data_01;
            // console.log(this.adat_01);

        });

        this.http.get(this.KMOM_TVA).toPromise().then(data_02 => {
            this.adat_02 = data_02;
            // console.log(this.adat_02);

        });
    }

  ngOnInit(): void {
  }

}
