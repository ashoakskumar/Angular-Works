import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../country';
import { CountryService } from '../../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  country = {} as Country | undefined;
  constructor(private countryService: CountryService,
    private route: ActivatedRoute) { 
    //  this.country = this.route.snapshot.data['countryDetail'];
    }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => this.countryService.getResolveCountry(+params['country-id']))
  ).subscribe(countr => {
    this.country = countr;
  });
    // this.route.params.pipe(
    //   switchMap((params: Params) => )
    // )
  }

}
