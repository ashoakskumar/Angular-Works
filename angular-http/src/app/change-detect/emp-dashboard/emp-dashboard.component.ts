import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {

  empArray:Employee[] = [] ;
  index = 103;

  constructor() { }

  ngOnInit(): void {
    this.empArray.push(new Employee(100,'Mahesh'));
    this.empArray.push(new Employee(101,'Krishna'));
    this.empArray.push(new Employee(102,'Shiva'));
  }
  add() {
    this.empArray.push(new Employee(this.index, "Name " + this.index++));
    console.log('Employee added: ' + JSON.stringify(this.empArray));
  }
  remove(index:number){
    console.log(index);
    this.empArray.splice(index,1);
  }
  update(index:number) {
    this.empArray[index].name += "-U";
  }
}
