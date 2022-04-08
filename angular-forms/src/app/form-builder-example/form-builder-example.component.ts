import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Department } from './department';
import { Employee } from './employee';
import { Team } from './team';
import { TeamManagementService } from './team-management.service';

@Component({
  selector: 'app-form-builder-example',
  templateUrl: './form-builder-example.component.html',
  styleUrls: ['./form-builder-example.component.scss']
})
export class FormBuilderExampleComponent implements OnInit {

  teamForm = {} as FormGroup;
  allSkills = of([] as any);
  formSubmitted = false;
  constructor(private formBuilder: FormBuilder, private teamMgtService: TeamManagementService) { }

  ngOnInit(): void {
    this.allSkills = this.teamMgtService.getSkills();
    this.createTeamForm();
    this.addEmployee();
  }
  createTeamForm() {
    this.teamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      teamManager: '',
      teamDept: this.formBuilder.group(new Department()),
      employees: this.formBuilder.array([])
    })
  }
  get employeeFormArray() : FormArray {
    return this.teamForm.get('employees') as FormArray;
  }
  addEmployee() {
    let employee = this.formBuilder.group(new Employee());
    this.employeeFormArray.push(employee);
  }
  deleteEmployee(idx: number) {
    this.employeeFormArray.removeAt(idx);
  }
  createFormWithDefaultData(team: Team) {
    this.teamForm.patchValue({
      teamName: team.teamName,
      teamManager: team.teamManager,
      teamDept: {
        deptHead: team.teamDept.deptHead,
        deptName: team.teamDept.deptName
      }
    });
    // let department = this.formBuilder.group({
    //   deptHead: team.teamDept.deptHead,
    //   deptName: team.teamDept.deptName
    // });
    // this.teamForm.setControl('teamDept',department);
    let employee = team.employees.map(employee => this.formBuilder.group(employee));
    let employeeFromArr = this.formBuilder.array(employee);
    this.teamForm.setControl('employees',employeeFromArr);
  }
  onFormSubmit() {
    let data = JSON.stringify(this.teamForm.value);
    console.log('Team Data: ', data);
    let team: Team = this.teamForm.value;
    this.teamMgtService.saveTeam(team);
    this.formSubmitted = true;
    this.teamForm.reset();
  }
  resetTeamForm() {
    this.teamForm.reset({
      teamName: 'Java Team',
      teamManager: 'Yogi'
    });
  }
  loadTeam(name: string) {
    this.teamMgtService.getTeamByName(name).subscribe(team=>{
      this.createFormWithDefaultData(team)})
  }
}
