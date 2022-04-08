import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from './team';
import { ALL_SKILLS, ALL_TEAMS } from './team-data';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TeamManagementService {

  constructor() { }
  getSkills() {
    return of(ALL_SKILLS);
  }
  getAllTeams(): Observable<Team[]>{
    return of(ALL_TEAMS);
  }
  getTeamByName(name:string): Observable<Team> {
    return this.getAllTeams().pipe(map(allTeams => allTeams.find(team => team.teamName == name) ?? new Team()));
  }
  saveTeam(team:Team){
    console.log('-----------Team----------');
    console.log('Team Name: ', team.teamName);
    console.log('Team Manager Name: ', team.teamManager);
    console.log('Team Department Name: ', team.teamDept.deptName);

    console.log('Team Department head: ', team.teamDept.deptHead);

    console.log('---------Employee Details----------'); 
    for(let employees of team.employees) {
      console.log('Employee Id: ', employees.empId);
      console.log('Employee Name: ', employees.empName);
      console.log('Employee Skill: ', employees.empSkill);
      console.log('-----------------------');
    }
  }
}
