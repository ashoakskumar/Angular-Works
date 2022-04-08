import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Student, StudentAcademics } from '../student-classes';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  public student: Student[] = [];
  public showMarkDetails: boolean = false;
  public showStudentOnChildComponent:any;
  public formBuild = {} as FormGroup;
  constructor(private service: StudentService,private fg:FormBuilder) { }

  ngOnInit(): void {
    this.service.getStudentList().subscribe(data=>{
      this.student =  data;
      console.log(this.student);
      this.buildForm();
    })
    
  }
  buildForm() {
    // this.formBuild = this.fg.group({
    //   students : this.fg.array([
    //      this.fg.group({
    //        studentName: '' ,
    //        studentAge: '',
    //        schoolName: '',
    //        gender: '' ,
    //        academicYears: this.fg.array([])
    //     })
    //   ])
    // }) 
    this.formBuild = this.fg.group({
      students : this.fg.array(this.addStd)
    })
    console.log(this.formBuild);
   // this.addStudentDetails();
  }
  get studentFormArray() : FormArray {
    return this.formBuild.get('students') as FormArray;
  }
  get accYrsArray() : FormArray {
    return this.studentFormArray.get('academicYears') as FormArray;
  }
  addStudentDetails() {
       this.student.forEach(rec => {
         ;
      let stds = this.fg.group(new Student(rec.rollNo,rec.studentName,rec.studentAge,rec.schoolName,rec.gender,rec.academicYears));  
      this.studentFormArray.push(stds);
    });
    console.log(this.formBuild);
  }
 get addStd() {
   let array:any = [];
    this.student.forEach((rec,index) => {
      ;
   let stds = this.fg.group({
           rollNo:rec.rollNo,
           studentName: rec.studentName ,
           studentAge: rec.studentAge,
           schoolName: rec.schoolName,
           gender: rec.gender ,
           academicYears: this.fg.array(rec.academicYears)
   });  
   array.push(stds);
 });
 //console.log(array);
 return array;
}
  getStudentDetails(rollNo: number,year: number) {
    this.showStudentOnChildComponent = this.student.filter(std=> {
      // if(std.rollNo === rollNo) {
      //    let yrObj =  std.academicYears.filter(yr => {
      //         return year = yr.academicYr
      //     })
      // }  
      return std.rollNo === rollNo 
      //  && std.academicYears.filter(yr => {
      //      year == yr.academicYr;
      // })
    }).map(filtr => {
      return Object.assign({},filtr,{academicYears: filtr.academicYears.filter(yr=>yr.academicYr === year)});
    })
    this.showMarkDetails = true;
    console.log(this.showStudentOnChildComponent);
  }
  onFormSubmit() {
    console.log(this.formBuild.value);
  }
}
