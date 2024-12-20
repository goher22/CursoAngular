import { Injectable } from "@angular/core";
import {
  Country,
  Region,
  SmallCountry,
} from "../interfaces/countries.interfaces";
import { combineLatest, map, Observable, of, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  private baseUrl = "https://restcountries.com/v3.1";

  private _region: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europa,
    Region.Oceania,
  ];

  constructor(private http: HttpClient) {}

  get regions(): Region[] {
    return [...this._region];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);

    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) =>
        countries.map<SmallCountry>((country) => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        })),
      ),
    );
  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    // if (!alphaCode) return of([]);
    const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;
    return this.http.get<Country>(url).pipe(
      map((country) => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      })),
    );
  }

  getCountryBorderByCodes(borders: string[]): Observable<SmallCountry[]> {
    if (!borders || borders.length === 0) return of([]);

    const countryRequest: Observable<SmallCountry>[] = [];

    borders.forEach((code) => {
      const request = this.getCountryByAlphaCode(code);
      countryRequest.push(request);
    });

    return combineLatest(countryRequest);
  }
}
