import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../interfaces/Country";

const API_URL: string = "https://restcountries.com/v3.1";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${API_URL}/capital/${term}`);
  }
}
