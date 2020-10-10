import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

    readonly KMOM_ETT = "https://me-api.mothermarycomesto.me/reports/week/1";
    readonly KMOM_TVA = "https://me-api.mothermarycomesto.me/reports/week/2";
    readonly KMOM_TRE = "https://me-api.mothermarycomesto.me/reports/week/3";
    readonly KMOM_FYRA = "https://me-api.mothermarycomesto.me/reports/week/4";
    readonly KMOM_FEM = "https://me-api.mothermarycomesto.me/reports/week/5";
    readonly KMOM_SEX = "https://me-api.mothermarycomesto.me/reports/week/6";
    readonly KMOM_TIO = "https://me-api.mothermarycomesto.me/reports/week/10";
    // posts = this.http.get(this.ROOT_URL);
    adat_01: any;
    adat_02: any;
    adat_03:any;
    adat_04:any;
    adat_05:any;
    adat_06:any;
    adat_10:any;
    reportPage = "kmom01";

    constructor(private http: HttpClient) {
        this.http.get(this.KMOM_ETT).toPromise().then(data_01 => {
            this.adat_01 = data_01;
        });

        this.http.get(this.KMOM_TVA).toPromise().then(data_02 => {
            this.adat_02 = data_02;
        });

        this.http.get(this.KMOM_TRE).toPromise().then(data_03 => {
            this.adat_03 = data_03;
        });

        this.http.get(this.KMOM_FYRA).toPromise().then(data_04 => {
            this.adat_04 = data_04;
        });

        this.http.get(this.KMOM_FEM).toPromise().then(data_05 => {
            this.adat_05 = data_05;
        });

        this.http.get(this.KMOM_SEX).toPromise().then(data_06 => {
            this.adat_06 = data_06;
        });

        this.http.get(this.KMOM_TIO).toPromise().then(data_10 => {
            this.adat_10 = data_10;
        });
    }

  ngOnInit(): void {
  }

}
