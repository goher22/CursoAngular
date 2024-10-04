import { Component } from "@angular/core";
import { CountriesService } from "../../services/countries.service";
import { Country } from "../../interfaces/Country";

@Component({
  selector: "app-by-capital-page",
  templateUrl: "./by-capital-page.component.html",
  styleUrl: "./by-capital-page.component.css",
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];
  constructor(private countriesServices: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
