import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ageValidator } from '../age-validator.directive';
import { nameValidator, NameValidatorDirective } from '../name-validator.directive';
import { PersonServiceService } from '../person-service.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  namePrefix:string = 'mr';
  constructor(public grp: FormBuilder, private service:PersonServiceService) { }
  public formGrp = {} as FormGroup;
  public locVal = ['chennai','coimbatore'];
  ngOnInit(): void {
    this.buildForm();
      this.service.getAgeStartFrom().subscribe(
      (age) => {
        console.log(age);
      }
    )
  }
  public buildForm() {
    this.formGrp = this.grp.group({
      // name : ['', [Validators.required,nameValidator(this.namePrefix)]],
      age: ['',[Validators.max(50),Validators.required],[ageValidator(this.service)]],
      name: '',
      gender:'male',
      location: '',
      address: this.grp.array([])
    })
    this.applyvalidator();
  }
  applyvalidator() {
    this.name.setValidators([Validators.required,nameValidator(this.namePrefix)]);
    this.name.updateValueAndValidity();
    // this.name.setValidators(nameValidator(this.namePrefix));
    // this.name.updateValueAndValidity();
  }
  get address(): FormArray {
    return this.formGrp.get('address') as FormArray;
  }
  get name()  {
   return this.formGrp.controls['name'];
  }
  newAddress(): FormGroup {
    return this.grp.group({
      doorNo: '',
      streetName: '',
      areaName:'',
      city:'',
      state:'',
      country:''
    });
  }
  addAddress() {
    this.address.push(this.newAddress());
  }

  save() {
    debugger;;
    console.log(this.formGrp.value);
  }

}
