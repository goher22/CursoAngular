import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CountriesService } from "../../services/countries.service";
import { Region } from "../../interfaces/countries.interfaces";

@Component({
  selector: "app-selector-page",
  templateUrl: "./selector-page.component.html",
  styles: ``,
})
export class SelectorPageComponent implements OnInit, OnDestroy {
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
  }

  get regions(): Region[] {
    return this.countrieServices.regions;
  }

  private onRegionChanged(): void {
    this.myForm.get("region")!.valueChanges.subscribe((region) => {});
  }
}
