import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { reportUnhandledError } from "rxjs/internal/util/reportUnhandledError";

const rtx5090 = {
  name: "RTX 5090",
  price: 2500,
  inStorage: 6,
};

@Component({
  templateUrl: "./basic-page.component.html",
  styles: ``,
})
export class BasicPageComponent implements OnInit {
  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  public myForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    inStorage: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  isValidFiedl(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
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

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset({
      price: 10,
      inStorage: 0,
    });
  }
}
