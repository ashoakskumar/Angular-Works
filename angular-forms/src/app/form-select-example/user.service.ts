import { Injectable } from '@angular/core';
import { Profile } from '../domain/profile';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  constructor() { }
  getProfiles(): Profile[] {
    let profiles = [new Profile('dev','Developer'), new Profile('mgr','Manager'), new Profile('dir','Director')];
    return profiles;
  }
  getTechnologies(): Technology[] {
    let technologies = [new Technology(100,'Java'),new Technology(101,'Spring'),new Technology(102,'Hibernate'),new Technology(103,'Spring')];
    return technologies;
  }
  createUser(user: User) {
    console.log('User name: ',user.userName);
    console.log('User Profile Id: ',user.profile.prId);
    console.log('User Profile Name: ',user.profile.prName);
    user.technology.forEach(tech=>{
      console.log('Technology name: ',tech.techId);
      console.log('Technology name: ',tech.techName);
    })
    
  }
}
