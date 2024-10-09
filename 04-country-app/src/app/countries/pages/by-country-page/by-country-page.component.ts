import { Component } from "@angular/core";
import { Country } from "../../interfaces/Country";
import { CountriesService } from "../../services/countries.service";

@Component({
  selector: "app-by-country-page",
  templateUrl: "./by-country-page.component.html",
  styleUrl: "./by-country-page.component.css",
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  constructor(private countriesServices: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesServices.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
