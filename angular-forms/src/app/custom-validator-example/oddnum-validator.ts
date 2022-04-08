import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function oddNumValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        return (value % 2 ===1 ) ? {"oddNum":true} : null;
    }
}