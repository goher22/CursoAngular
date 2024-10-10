import { Component, OnInit } from "@angular/core";
import { Country } from "../../interfaces/Country";
import { CountriesService } from "../../services/countries.service";

@Component({
  selector: "app-by-country-page",
  templateUrl: "./by-country-page.component.html",
  styleUrl: "./by-country-page.component.css",
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = "";

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountry.countries;
    this.initialValue = this.countriesServices.cacheStore.byCountry.term;
  }

  constructor(private countriesServices: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesServices.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
