import { Component } from "@angular/core";
import { Country } from "../../interfaces/Country";
import { CountriesService } from "../../services/countries.service";
import { Region } from "../../interfaces/region.type";

@Component({
  selector: "app-by-region-page",
  templateUrl: "./by-region-page.component.html",
  styleUrl: "./by-region-page.component.css",
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public regions: Region[] = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  public selectedRegion?: Region;

  constructor(private countriesServices: CountriesService) {}

  searchByCapital(term: Region): void {
    this.selectedRegion = term;
    this.countriesServices.searchRegin(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
