import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CountriesService } from "../../services/countries.service";
import { Region, SmallCountry } from "../../interfaces/countries.interfaces";
import { filter, switchMap, tap } from "rxjs";

@Component({
  selector: "app-selector-page",
  templateUrl: "./selector-page.component.html",
  styles: ``,
})
export class SelectorPageComponent implements OnInit {
  public countries: SmallCountry[] = [];
  public borders: string[] = [];
  public myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private countrieServices: CountriesService,
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      region: ["", Validators.required],
      country: ["", Validators.required],
      borders: ["", Validators.required],
    });

    this.onRegionChanged();
    this.onCountryChange();
  }

  get regions(): Region[] {
    return this.countrieServices.regions;
  }

  private onRegionChanged(): void {
    this.myForm
      .get("region")!
      .valueChanges.pipe(
        tap(() => this.myForm.get("country")!.setValue("")),
        switchMap((region) =>
          this.countrieServices.getCountriesByRegion(region),
        ),
      )
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  private onCountryChange(): void {
    this.myForm
      .get("country")!
      .valueChanges.pipe(
        tap(() => this.myForm.get("borders")!.setValue("")),
        filter((value: string) => value.length > 0),
        switchMap((alphaCode) =>
          this.countrieServices.getCountryByAlphaCode(alphaCode),
        ),
      )
      .subscribe((countries) => {
        this.borders = countries.borders;
      });
  }
}
