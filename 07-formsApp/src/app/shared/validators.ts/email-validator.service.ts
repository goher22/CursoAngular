import { Injectable } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from "@angular/forms";
import { delay, Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class EmailValidatorService implements AsyncValidator {
  validate(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        if (email === "gohercarlos@gmail.com") {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
        }

        subscriber.next(null);
        subscriber.complete();
      },
    ).pipe(delay(3000));

    return httpCallObservable;

    // return this.http.get(`http://localhost:3000/users?q=${email}`).pipe(
    //   map((resp) => {
    //     return resp.length === 0 ? null : { emailTake: true };
    //   }),
    // );
  }
  // validate(
  //   control: AbstractControl,
  // ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   return of({
  //     emailTaken: true,
  //   });
  // }
}
