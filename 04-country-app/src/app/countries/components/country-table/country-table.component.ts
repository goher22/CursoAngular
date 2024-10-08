import { Component, Input, input } from "@angular/core";
import { Country } from "../../interfaces/Country";

@Component({
  selector: "countries-table",
  templateUrl: "./country-table.component.html",
  styleUrl: "./country-table.component.css",
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
