import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }
  createUser(team:any) {
    console.log(JSON.stringify(team));
  }
}
