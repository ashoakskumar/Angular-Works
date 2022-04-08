import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function teamNameValidator(teamNamePrefix:any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        return (value != '' && value != null && !value.startsWith(teamNamePrefix)) ? {"teamNamePrefix" : true} : null;
    }
}