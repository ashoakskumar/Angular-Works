import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../domain/user';
import { UserModel } from './user-validator';

@Injectable({
  providedIn: 'root'
})
export class UserValidatorService {
 
  constructor() { }
  private  USERS = ['Ashok','Kumar'];
  unameAlreadyExists(uname:string): Observable<boolean> {
    if(this.USERS.indexOf(uname) >= 0) return of(true); else return of(false);
  }
  saveUser(user:UserModel) {
    console.log(user.password);
    console.log(user.userName);
    console.log(user.fullName);
  }
}
