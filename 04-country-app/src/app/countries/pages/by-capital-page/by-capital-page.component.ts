import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../../services/countries.service";
import { Country } from "../../interfaces/Country";

@Component({
  selector: "app-by-capital-page",
  templateUrl: "./by-capital-page.component.html",
  styleUrl: "./by-capital-page.component.css",
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = "";

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }

  constructor(private countriesServices: CountriesService) {}

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
