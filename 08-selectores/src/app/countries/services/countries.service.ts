import { Injectable } from "@angular/core";
import { Region, SmallCountry } from "../interfaces/countries.interfaces";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  private _region: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europa,
    Region.Oceania,
  ];

  constructor() {}

  get regions(): Region[] {
    return [...this._region];
  }

  getCountriesByRegion(region: Region): SmallCountry[] {
    return [];
  }
}
