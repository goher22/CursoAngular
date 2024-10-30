import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

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

  isValidFiedl(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  isValidFiedlArray(formArray: FormArray, index: number): boolean | null {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case "required":
          return "Este campo es requerido";
        case "minlength":
          return `Mínimo ${errors["minlength"].requiredLength} caracters.`;
      }
    }
    return "";
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
  }
}
