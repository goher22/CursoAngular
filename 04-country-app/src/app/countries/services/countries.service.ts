import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap } from "rxjs";
import { Country } from "../interfaces/Country";
import { CacheStore } from "../interfaces/cache-store.intefaces";
import { Region } from "../interfaces/region.type";

const API_URL: string = "https://restcountries.com/v3.1";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  public cacheStore: CacheStore = {
    byCapital: {
      term: "",
      countries: [],
    },
    byCountry: {
      term: "",
      countries: [],
    },
    byRegion: {
      region: "",
      countries: [],
    },
  };

  constructor(private httpClient: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${API_URL}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null)),
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${API_URL}/capital/${term}`).pipe(
      catchError((error) => of([] as Country[])),
      tap((countries) => (this.cacheStore.byCapital = { term, countries })),
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${API_URL}/name/${term}`).pipe(
      catchError((error) => of([] as Country[])),
      tap((countries) => (this.cacheStore.byCountry = { term, countries })),
    );
  }

  searchRegin(region: Region): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${API_URL}/region/${region}`).pipe(
      catchError((error) => of([] as Country[])),
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
    );
  }
}
