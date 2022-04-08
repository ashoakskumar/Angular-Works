import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../domain/profile';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';
import { UserServices } from './user.service';

@Component({
  selector: 'app-form-select-example',
  templateUrl: './form-select-example.component.html',
  styleUrls: ['./form-select-example.component.scss']
})
export class FormSelectExampleComponent implements OnInit {

  isValidFormSubmitted = false;
  allProfiles: Profile[];
  allTechnologies: Technology[];
  userForm: FormGroup;
  constructor(private builder: FormBuilder, private service: UserServices) { }

  ngOnInit(): void {
    this.userForm = this.builder.group({
      profile: [null, Validators.required],
      userName: ['', Validators.required],
      technology: [null, Validators.required]
    });
    this.allProfiles = this.service.getProfiles();
    this.allTechnologies = this.service.getTechnologies();
  }
  get profile() {
    return this.userForm.get('profile');
  }
  get technology() {
    return this.userForm.get('technology');
  }
  get userName() {
    return this.userForm.get('userName');
  }
  resetForm(form: FormGroup) {
    form.reset();
  }
  setDefaultValues() {
    let user = new User();
    user.userName = 'Ashok Kumar';
    user.profile = this.allProfiles[2];
    user.technology = [this.allTechnologies[1],this.allTechnologies[3]];
    this.userForm.setValue(user);
  }
  onProfileChange() {
    let profile = this.userForm.get('profile')?.value as Profile;
    console.log('Profile Changed: ', profile.prName);
  }
  compareTech(t1: Technology, t2: Technology): boolean {
    console.log(t1.techId +'-' + t2.techId );
    return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
  }
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if(this.userForm.valid) {
      this.isValidFormSubmitted = true;
    } else return;
    let user = this.userForm.value as User;
    this.service.createUser(user);
    this.resetForm(this.userForm);
  }
}
