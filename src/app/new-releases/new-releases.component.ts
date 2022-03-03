import { Component, OnInit, Input } from "@angular/core";
import data from "../data/NewReleasesAlbums.json";
@Component({
  selector: "app-new-releases",
  templateUrl: "./new-releases.component.html",
  styleUrls: ["./new-releases.component.css"],
})
export class NewReleasesComponent implements OnInit {
  constructor() {}
  @Input() releases: Array<any> | undefined;

  ngOnInit(): void {
    this.releases = data.albums.items;
  }
}