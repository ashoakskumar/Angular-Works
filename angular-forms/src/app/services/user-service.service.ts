import { Injectable } from '@angular/core';
import { Profile } from '../domain/profile';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getProfiles(): Profile[] {
    let profiles = [
      new Profile('dev','Developer'),
      new Profile('man','Manager'),
      new Profile('dir','Director')
    ]
    return profiles;
  }
  getTechnologies() : Technology[] {
    let technologies = [
      new Technology(101,'JAVA'),
      new Technology(102,'ANGULAR'),
      new Technology(103,'HIBERNATE'),
      new Technology(104,'SPRING')
    ]
    return technologies;
  }
  createUser(user:User) :void {
    console.log('User Name: ',user.userName);
    console.log('User Age: ', user.age);
    console.log('User Gender: ', user.gender);
    console.log('User Profile Id: ', user.profile.prId);
    console.log('User Profile Name: ',user.profile.prName);
    user.technology.forEach(tech =>{
      console.log('User Technology Id: ',tech.techId);
      console.log('User Technology Name: ',tech.techName);
    })
    console.log('Married: ',user.isMarried);
    console.log('T & C Accepted: ', user.isTCAccepted);
    
  }
}
