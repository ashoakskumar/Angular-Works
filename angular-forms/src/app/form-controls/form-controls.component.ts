import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  age = new FormControl(20, Validators.required);
  city = new FormControl();
  country = new FormControl({value: 'India', disabled: true});
  married = new FormControl(true);

  setNameValue() {
    this.name.setValue('Donald Trump');
    console.log('Name: '+ this.name.value);
    console.log('Validation Status: ' + this.name.status);
  }
  setResetName() {
    this.name.reset();
  }
  changeValue() {
    console.log(this.married.value);
    this.married = new FormControl(!this.married.value);
  }
}
