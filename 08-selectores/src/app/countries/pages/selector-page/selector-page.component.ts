import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-selector-page",
  templateUrl: "./selector-page.component.html",
  styles: ``,
})
export class SelectorPageComponent implements OnInit {
  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      region: ["", Validators.required],
      country: ["", Validators.required],
      borders: ["", Validators.required],
    });
  }
}
