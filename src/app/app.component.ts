/*********************************************************************************
 * WEB422 – Assignment 05
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students. *
 * Name: Batuhan Ipci Student ID: 130971203 Date: 07/MAR/2022
 * ********************************************************************************/

import { Component, OnInit } from "@angular/core";
import { NavigationStart, Router, Event } from "@angular/router";
import { AuthService } from "../app/services/auth.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  searchString: string = "";

  public token: any;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    });
  }

  handleSearch() {
    this.router.navigate(["/search"], {
      queryParams: {
        q: `${this.searchString}`,
      },
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
