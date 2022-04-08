import { Component, Input, OnInit } from '@angular/core';
import { Marks } from '../student-classes';

@Component({
  selector: 'app-student-mart-detail',
  templateUrl: './student-mart-detail.component.html',
  styleUrls: ['./student-mart-detail.component.scss']
})
export class StudentMartDetailComponent implements OnInit {

  @Input('showDetails')
  showDetails = [{}] as Array<any>;
  result: String = '';
  grade:String = '';
  showResult: Boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngDoCheck() {
    console.log('show details: ', this.showDetails);
   // this.showResult = false;
  }
  total : Number = 0;
  accYrs: Number =0;
  average: Number = 0;
  showStudentResults(showDetail:any[]) {
    const marks:Marks = showDetail[0]['marks'] as Marks;
    this.total = (marks.arts + marks.maths + marks.science) / 3;
    this.average = (marks.arts + marks.maths + marks.science) / 3;
    this.accYrs = showDetail[0]['academicYr'];
    if(marks.arts <40 || marks.maths <40 || marks.science < 40) {
        this.result = 'FAIL';
    } else if(this.average >= 80) {
        this.result = 'PASS';
        this.grade = 'DISTINCTION';
    } else if(this.average >= 60 && this.average < 80) {
      this.result = 'PASS';
      this.grade = 'FIRST CLASS';
  } else if (this.average >= 40 && this.average < 60) {
     this.result = 'PASS';
     this.grade = 'SECOND CLASS';
  }
    console.log(this.result);
    console.log(this.grade);
    this.showResult = true;
  }
}
