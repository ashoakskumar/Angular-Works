import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'one-conversion';
  showMe = true;
  switchValue = 5 ;
  users = [{userId:"10tt", firstName:"kumFFar11111"},
  {userId:"20ff", firstName:"kumFFar2222", dob: "07/10/1990", salary : 12220000.199},
  {userId:"30ff", firstName:"kumBBBar3333" , dob: "07/30/1990", salary : 100000},
  {userId:"35gg", firstName:"kumar4444" , dob: "09/20/1990", salary : 120000},
  {userId:"36bb", firstName:"kumar5555" , dob: "11/10/1990", salary : 170000},
  {userId:"38nn", firstName:"kumar66666" , dob: "06/23/1990", salary : 120000}];
  user = {
    firstName: "Ashok",
    lastName: "kumar",
    dob: "07/22/1986",
    salary: "10000",
    city: "India"
  }
  colorVal = 'Blue';
  className1 = 'one';
  className2="two";
  disabled = false;
  oneName: string='default';
  public readMe() {
    console.log("clicked read me !!!");
  }
}
