import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-example',
  templateUrl: './form-group-example.component.html',
  styleUrls: ['./form-group-example.component.scss']
})
export class FormGroupExampleComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  usrNameChanges:string;
  usrStatusChanges:string;
  formSubmitted:boolean;
  profiles = [{name:'Developer', shortName:'Dev'},{name:'Manager',shortName:'Mgr'},{name:'Director',shortName:'Dir'}];
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    age: new FormControl('',Validators.required),
    address: new FormGroup({
      houseNumber: new FormControl('', Validators.required),
      city: new FormControl('Noida'),
      country: new FormControl({value:'India',disabled:true})
    }),
    gender: new FormControl('Male'),
    profile: new FormControl(this.profiles[1].shortName),
    users: new FormArray([
      new FormControl('Mahesh'),new FormControl('Krishna'),new FormControl()
    ])
  })
  get userName() {
    return this.userForm.get('name');
  }
  ngAfterViewInit(): void{
    this.userForm.get('name')?.valueChanges.subscribe(data => this.usrNameChanges = data);
    this.userForm.get('name')?.statusChanges.subscribe(data=> this.usrStatusChanges = data);
  }
  onFormSubmit():void {
    this.formSubmitted = true;
    if(this.userForm.valid){
      this.logData();
      this.resetForm();
    } else {
      this.formSubmitted = false;
    }
  }
  logData() {
    console.log('Name :', this.userForm.get('name')?.value);
    console.log('Age:', this.userForm.get('age')?.value);
    let address = this.userForm.get('address');
    console.log('House Number: ',address?.get('houseNumber')?.value);
    console.log('City: ', address?.get('city')?.value);
    console.log('Country: ', address?.get('country')?.value);
    let userArr = this.userForm.get('users') as FormArray;
    for(let i=0;i<userArr.length;i++)
      console.log('userArr: ', userArr.at(i).value);
    // Gives complete address
	 console.log(address?.value); 
   //Checks address validation	 
    console.log(address?.valid); 
      // Gives complete FormArray data	 
    console.log(this.users.value); 
      //Checks FormArray validation	 	
    console.log(this.users.valid); 	 
      // Gives Complete form data	 	 
    console.log(this.userForm.value); 
      // checks Complete form validation	 	 
    console.log(this.userForm.valid);
  }
  get users() {
    return this.userForm.get('users') as FormArray;;
  }
  resetForm() {
    this.userForm.reset();
  }
  setDefaultValue() {
    this.userForm.patchValue({name:'Mahesh', gender: 'Male', profile: this.profiles[2].shortName,
  address: {city: 'Noida', country:'India'}});
  }
  setAge() {
    this.userForm.get('age')?.setValue('India');
  }
  setCountry() {
    this.userForm.get('address')?.get('country')?.setValue('India');
  }
  addUserField() {
    this.users.push(new FormControl());
  }
  deleteUserField(index:number) {
    this.users.removeAt(index);
  }
}
