import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRoutingModule } from '../person-routing.module';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonEditComponent } from './person/person-list/person-edit/person-edit.component';
import { PersonService } from './person.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ],
  providers: [PersonService]
})
export class PersonModule { }
