import { Component } from "@angular/core";
import { Country } from "../../interfaces/Country";
import { CountriesService } from "../../services/countries.service";

@Component({
  selector: "app-by-region-page",
  templateUrl: "./by-region-page.component.html",
  styleUrl: "./by-region-page.component.css",
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  constructor(private countriesServices: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesServices.searchRegin(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
