import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: "./switches-page.component.html",
  styles: ``,
})
export class SwitchesPageComponent {
  public myForm: FormGroup = new FormGroup({
    gender: new FormControl("M", [Validators.required]),
    wantNotifications: new FormControl(true, [Validators.required]),
    termsAndConditions: new FormControl(false, [Validators.requiredTrue]),
  });

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
