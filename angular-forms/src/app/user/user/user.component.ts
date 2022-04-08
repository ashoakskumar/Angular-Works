import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profile } from 'src/app/domain/profile';
import { Technology } from 'src/app/domain/technology';
import { User } from 'src/app/domain/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isValidFormSubmitted = false;
  allProfiles: Profile[];
  allTechnologies: Technology[];
  initialProfileVal = null;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.allProfiles = this.userService.getProfiles();
    this.allTechnologies = this.userService.getTechnologies();
  }

  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if(form.valid) {
      this.isValidFormSubmitted = true;
    } else return;
    let newuser:User = form.value;
    this.userService.createUser(newuser);
    this.resetUserForm(form);
  }
  resetUserForm(form: NgForm) {
    form.resetForm();
    this.initialProfileVal = null;
  }
  setDefaultUser(form: NgForm) {
    let user = new User();
    user.userName = 'Ashok Kumar';
    user.age=30;
    user.gender='male';
    user.isMarried=true;
    user.isTCAccepted=true;
    user.technology = [this.allTechnologies[2],this.allTechnologies[1]];
    user.profile = this.allProfiles[2];
    form.setValue(user);
  }
  compareTech(t1: Technology, t2: Technology):boolean {
    return t1 && t2 ? t1.techId === t2.techId : t1==t2;
  }
}
