import { Component } from "@angular/core";

@Component({
  selector: "gifs-search-box",
  templateUrl: "./searchbox.component.html",
  styleUrls: ["./search-box.component.css"],
})
export class SearchBoxComponent {
  constructor() {}

  searchTag(newTag: string) {
    console.log({ newTag });
  }
}
