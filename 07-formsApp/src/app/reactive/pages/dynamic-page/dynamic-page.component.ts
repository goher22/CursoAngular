import { Component } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  templateUrl: "./dynamic-page.component.html",
  styles: ``,
})
export class DynamicPageComponent {
  public myForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    favoriteGame: new FormArray([
      new FormControl("Metal Gear", Validators.required),
      new FormControl("Death Stranding", Validators.required),
    ]),
  });

  get favoriteGames() {
    return this.myForm.get("favoriteGame") as FormArray;
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
  }
}
