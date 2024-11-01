import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
// import * as customValidators from "../../../shared/validators/calidators";
import { ValidatorsService } from "../../../shared/services/validators.services";
import { EmailValidatorService } from "../../../shared/validators.ts/email-validator.service";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styles: ``,
})
export class RegisterPageComponent implements OnInit {
  public myForm!: FormGroup;

  constructor(
    private validatorsService: ValidatorsService,
    private emailValidatorService: EmailValidatorService,
  ) {}
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        // Validators.pattern(customValidators.firstNameAndLastnamePattern),
        Validators.pattern(this.validatorsService.firstNameAndLastnamePattern),
      ]),
      email: new FormControl("", {
        validators: [
          Validators.required,
          // Validators.pattern(customValidators.emailPattern),
          Validators.pattern(this.validatorsService.emailPattern),
        ],
        asyncValidators: [this.emailValidatorService.validate],
      }),
      userName: new FormControl("", {
        // validators: [Validators.required, customValidators.cantBeStride],
        validators: [Validators.required, this.validatorsService.cantBeStride],
      }),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      password2: new FormControl("", [Validators.required]),
    });
  }

  isValidField(field: string) {
    this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
