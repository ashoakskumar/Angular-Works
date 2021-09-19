import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Country } from './country';
import { CountryService } from './country.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CountryDetailResolver implements Resolve<Country | null> {
  constructor(private countryService: CountryService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country | null> {
    let id = route.paramMap.get('country-id') ?? '';
    let parseInteger = parseInt(id,10);
    console.log('Resolving for country id: ' + id);

    // return this.countryService.getCountry(parseInteger).pipe(
		// 	//switchMap((params: Params) => this.countryService.getCountry(+params['country-id']))
		// ).
    // subscribe((countr) => {
		// 	return countr;
		// });
    return this.countryService.getResolveCountry(parseInteger).pipe(
      map(country => {
        if (country) {
          return country;
        } else {
          this.router.navigate(['/country/countryList']);
          return null;
        }
      }));

  //   let getCountry  = this.countryService.getCountry(parseInteger);
  //   return getCountry.pipe(
  //     map(country => {
  //       if(country) {
  //         return country;
  //       } else {
  //         this.router.navigate(['/country/list']);
  //         return null;
  //       }
  //     })
  //   )
   }
}
