import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

const GIPHY_API_KEY = "CYhTSkRDUdxxeC3knW3c6zjxpGnwgt2c";
const BASE_URL = "https://api.giphy.com/v1/gifs";

@Injectable({
  providedIn: "root",
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set("limit", "10")
      .set("api_key", GIPHY_API_KEY)
      .set("q", tag);

    this.http.get(`${BASE_URL}/search`, { params }).subscribe((resp) => {
      console.log(resp);
    });
  }
}
