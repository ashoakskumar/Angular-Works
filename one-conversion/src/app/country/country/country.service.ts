import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from './country';
import { map } from 'rxjs/operators';

const countries = [new Country(1,'India','New Delhi','INR'),new Country(2,'China','Beijing','RMB')];
let countriesObservables = of(countries);
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }
  getCountries() {
    return countriesObservables;
  }
  getCountry(id: number){
    return this.getCountries().pipe(map(countries=>{
       countries.find(country=>country.countryId === id)
    }))
  }
  getResolveCountry(id: number): Observable<Country | undefined> {
    return countriesObservables.pipe(
      map(countries => countries.find(country => country.countryId === id))
    );
  }
  updateCountry(country:Country){
    return this.getCountries().pipe(map(countries=>{
      let countryObj = countries.find(ob=> ob.countryId===country.countryId);
      countryObj = country;
      return countryObj;
    }))
  }
  addCountry(country: Country) {
    return this.getCountries().pipe(map(countries=>{
      let maxIndex = countries.length-1;
      let countryWithMaxIndex = countries[maxIndex];
      country.countryId = countryWithMaxIndex.countryId + 1;
      countries.push(country);
      return country;
    }))
  }
}
