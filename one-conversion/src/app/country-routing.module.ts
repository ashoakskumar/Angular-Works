import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country/country.component';
import { AddCountryComponent } from './country/country/add-country/add-country.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { CountryListComponent } from './country/country/country-list/country-list.component';
import { CountryEditComponent } from './country/country/country-list/country-edit/country-edit.component';
import { CountryEditCanDeactivateGuard } from './country-edit-can-deactivate.guard';
import { CountryDetailComponent } from './country/country/country-list/country-detail/country-detail.component';
import { CountryDetailResolver } from './country/country/country-detail.resolver';

const countryRoutes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
    children: [
      {
        path: 'add',
        component: AddCountryComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: 'list',
        component:CountryListComponent,
        children: [
          {
            path: 'edit/:country-id',
            component: CountryEditComponent,
            canDeactivate: [CountryEditCanDeactivateGuard]
          },{
            path:'detail/:country-id',
            component: CountryDetailComponent,
            resolve: {
              countryDetail: CountryDetailResolver
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(countryRoutes)
  ],
  exports: [RouterModule],
  providers: [ CountryDetailComponent ]
})
export class CountryRoutingModule { }
