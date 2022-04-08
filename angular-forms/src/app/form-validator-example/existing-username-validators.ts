import { AbstractControl, AsyncValidatorFn, ValidationErrors, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { UserValidatorService } from "./user-validator.service";
import { map } from 'rxjs/operators';
export function existingUsernameValidators(userService: UserValidatorService) :AsyncValidatorFn {
    return (control: AbstractControl): Promise<Validators | null> | Observable<ValidationErrors | null> => {
        return userService.unameAlreadyExists(control.value).pipe(map(exist=>{
            return exist ? {"usernameExists":true} : null;
        }))
    } 
}