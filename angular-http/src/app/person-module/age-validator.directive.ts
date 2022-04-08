import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { PersonServiceService } from './person-service.service';
import { AgeStart } from './person/model';
export function ageValidator(service:PersonServiceService) :AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return service.getAgeStartFrom().pipe(debounceTime(4000),map(
      (age:any) => {
        return control.value && control.value < age.personAgeStartsFrom ? {"compliant":true} : null;
      }
    ))
    //  service.getAgeStartFrom().subscribe(
    //   (age) => {
    //     return control.value && control.value < age.personAgeStartsFrom ? {"compliant":true} : null;
    //   }
    // ).
    
  }
}
@Directive({
  selector: '[appAgeValidator]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: AgeValidatorDirective, multi: true }]
})
export class AgeValidatorDirective implements AsyncValidator {

  constructor(private service:PersonServiceService) { }
  validate(control:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return ageValidator(this.service)(control);
  }
}
