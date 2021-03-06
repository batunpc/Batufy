import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
//Services
import { MusicDataService } from "../../services/music-data.service";
@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  results: any;
  searchQuery: any;
  constructor(private data: MusicDataService, private route: ActivatedRoute) {}

  private searchSub!: Subscription;

  ngOnInit(): void {
    this.searchSub = this.route.queryParams.subscribe((params: Params) => {
      this.searchQuery = params["q"];
      this.data.searchArtists(this.searchQuery).subscribe((data) => {
        this.results = data.artists.items.filter(
          (searchData: any) => searchData.images.length > 0
        );
      });
    });
  }

  ngOnDestroy(): void {
    this.searchSub?.unsubscribe();
  }
}
