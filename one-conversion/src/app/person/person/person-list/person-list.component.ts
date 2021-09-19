import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonService } from '../../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  persons: Observable<Person[]>;
  constructor(private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) {
      this.persons = this.personService.getPersons();
     }

  ngOnInit(): void {
  }
  goToEdit(person:Person) {
    this.router.navigate([person.personId], {relativeTo: this.route});
  }
}
