import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  templateUrl: "./basic-page.component.html",
  styles: ``,
})
export class BasicPageComponent {
  public myForm: FormGroup = new FormGroup({
    name: new FormControl("", [], []),
    price: new FormControl(0),
    inStorage: new FormControl(0),
  });

  onSave(): void {
    console.log(this.myForm.value);
  }
}
