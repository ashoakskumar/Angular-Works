import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { CountryRoutingModule } from '../country-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryEditComponent } from './country/country-list/country-edit/country-edit.component';
import { CountryService } from './country/country.service';
import { CountryDetailComponent } from './country/country-list/country-detail/country-detail.component';



@NgModule({
  declarations: [
    CountryComponent,
    AddCountryComponent,
    CountryListComponent,
    CountryEditComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,ReactiveFormsModule
  ],
  providers: [CountryService]
})
export class CountryModule { }
