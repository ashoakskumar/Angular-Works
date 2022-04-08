import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { existingUsernameValidators } from './existing-username-validators';
import { UserValidatorService } from './user-validator.service';

@Component({
  selector: 'app-form-validator-example',
  templateUrl: './form-validator-example.component.html',
  styleUrls: ['./form-validator-example.component.scss']
})
export class FormValidatorExampleComponent implements OnInit {

  userForm: FormGroup;
  constructor(private builder: FormBuilder, private service:UserValidatorService) { }

  ngOnInit(): void {
    this.userForm = this.builder.group({
      fullName: '',
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  get userName() {
    return this.userForm.get('userName');
  }
  get fullName() {
    return this.userForm.get('fullName');
  }
  get password() {
    return this.userForm.get('password');
  }
  addValidators() {
    this.fullName?.setValidators([Validators.required]);
    this.fullName?.updateValueAndValidity();
    this.userName?.setValidators([Validators.required,Validators.minLength(5),Validators.maxLength(10)]);
    this.fullName?.updateValueAndValidity();
    this.password?.setValidators([Validators.required,Validators.maxLength(10),Validators.minLength(5)]);
    this.password?.updateValueAndValidity();
  }
  addAsyncValidators() {
    this.userName?.setAsyncValidators([existingUsernameValidators(this.service)]);
  }
  clearUserValidators() {
    this.fullName?.clearValidators();
    this.fullName?.updateValueAndValidity();
    this.userName?.clearValidators();
    this.userName?.updateValueAndValidity();
    this.password?.clearValidators();
    this.password?.updateValueAndValidity();
  }
  clearUserAsyncValidators() {
    this.userName?.clearAsyncValidators();
    this.userName?.updateValueAndValidity();
  }
  onFormSubmit() {
    this.service.saveUser(this.userForm.value);
    this.userForm.reset();
  }
}

