import { AbstractControl, ValidationErrors } from "@angular/forms";

export const cantBeStride = (
  control: AbstractControl,
): ValidationErrors | null => {
  const value: string = control.value.trim().toLowerCase();
  if (value === "strider") {
    return {
      noStrider: true,
    };
  }

  return null;
};
