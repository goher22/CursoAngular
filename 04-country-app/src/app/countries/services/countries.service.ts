import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Country } from "../interfaces/Country";

const API_URL: string = "https://restcountries.com/v3.1";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${API_URL}/capital/${term}`)
      .pipe(catchError((error) => of([] as Country[])));
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${API_URL}/name/${term}`)
      .pipe(catchError((error) => of([] as Country[])));
  }

  searchRegin(region: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${API_URL}/region/${region}`)
      .pipe(catchError((error) => of([] as Country[])));
  }
}
