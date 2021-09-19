import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from './person/person';

const PERSONS = [new Person(1,'Mahesh','Varanasi'),
new Person(2, 'Ram','Ayodhya'),
new Person(3,'Krishna','Mathura')];

let personObservable = of(PERSONS);
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPersons(): Observable<Person[]>{
    return of(PERSONS);
  }
  getPerson(id:number) {
    return this.getPersons().pipe(map(persons=>persons.find(person=>person.personId === id)))
  }
  updatePerson(person:Person) {
    return this.getPersons().pipe(
      map(persons => {
        let personObj = persons.find(obj => obj.personId === person.personId);
        personObj = person;
        return personObj;
      })
    )
  }
}
