import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(namePrefix:any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const val = control.value;
    return (val != null && val != '' && !val.startsWith(namePrefix) ? {'prefix':true} : null)
  }
}
@Directive({
  selector: '[appNameValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true }]
})
export class NameValidatorDirective {
  @Input()
  namePrefix: string = '';
  constructor() { }
  validate(control: FormControl): ValidationErrors | null {
    return nameValidator(this.namePrefix)(control);
  }
}
