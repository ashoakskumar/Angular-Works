import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person/person.component';
import { PersonListComponent } from './person/person/person-list/person-list.component';
import { PersonEditComponent } from './person/person/person-list/person-edit/person-edit.component';
import { CanDeactivateGuard } from './can-deactivate.guard';

const personRoutes: Routes = [
  {
    path: 'person',
    component: PersonComponent,
    children: [
      {
        path:'',
        component:PersonListComponent,
        children: [ {
          path:':id',
          component:PersonEditComponent,
          canDeactivate: [CanDeactivateGuard]
        }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(personRoutes)
  ],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
