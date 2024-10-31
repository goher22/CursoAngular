import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as customValidators from "../../../shared/validators/calidators";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.pattern(customValidators.firstNameAndLastnamePattern),
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(customValidators.emailPattern),
    ]),
    userName: new FormControl("", {
      validators: [Validators.required, customValidators.cantBeStride],
    }),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    password2: new FormControl("", [Validators.required]),
  });

  isValidField(field: string) {}

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
