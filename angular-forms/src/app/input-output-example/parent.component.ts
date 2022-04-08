import { Component } from "@angular/core";
import { Student } from "./Student";

@Component({
    selector: 'app-output',
    templateUrl: './parent.component.html'
})
export class ParentComponent {
    parentTitle:string = 'Parent Component';
    cityMsg = "India's city names";
    cityArray = ['chennai','madurai','trichy'];
    stdAddMsg = 'Add Student';

    stdMsg ='Student Leader Detail';
    stdLeaderObj = new Student('Ashok','kumar');

    stdFullName = '';
    sum = '';
    msg = '';

    saveData(std:any){
        this.stdFullName =  std.firstName+ ' '+std.lastName;
    }

    printSum(res:any) {
        this.sum = res;
    }

    printMsg(msg:any) {
        this.msg = msg;
    }
}