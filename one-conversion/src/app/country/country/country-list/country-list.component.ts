import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: Observable<Country[]>;
  constructor(private countryService: CountryService) {
    this.countries = this.countryService.getCountries();
   }

  ngOnInit(): void {
  }
 

}
