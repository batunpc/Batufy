/********************************************************************************* *
 * WEB422 – Assignment 06  I declare that this assignment is my own work in accordance
 * with Seneca Academic Policy. No part of this * assignment has been copied manually or
 * electronically from any other source (including web sites) or
 * distributed to other students.
 *
 * Name: Batuhan Ipci Student ID: 130971203 Date: 07/04/2022
 *
 * Angular App (Deployed) Link: https://batufy.netlify.app
 *
 * User API (Heroku) Link: https://batufydoodle.herokuapp.com/
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
  constructor(private router: Router, private auth: AuthService) {}

  title = "batufy";
  searchString: string = "";
  token: any;

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    });
  }

  handleSearch() {
    this.router.navigate(["/search"], {
      queryParams: { q: this.searchString },
    });
    this.searchString = "";
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
