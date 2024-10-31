import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    userName: new FormControl("", [Validators.required]),
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
