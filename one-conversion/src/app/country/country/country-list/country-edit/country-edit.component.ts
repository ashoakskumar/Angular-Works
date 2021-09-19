import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Params  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../country';
import { CountryService } from '../../country.service';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.scss']
})
export class CountryEditComponent implements OnInit {
  country : any;
  countryForm = {} as FormGroup;
  isUpdating = false;
  constructor(private countryService: CountryService,
    private route:ActivatedRoute,private router:Router,
    private formBuilder: FormBuilder) {
      this.route.params.pipe(
        switchMap((params: Params) => this.countryService.getCountry(+params['country-id']))
      ).
      subscribe((countr) => {
        this.country = countr;
      //	this.createForm(countr);
      this.countryForm = this.formBuilder.group({
        name: this.country?.name,
        capital: this.country?.capital,
        currency: this.country?.currency
      });
      });
     }

  ngOnInit(): void {
    
  }
  // createForm(country: Country | undefined) {
	// 	this.countryForm = this.formBuilder.group({
	// 		name: country?.name,
	// 		capital: country?.capital,
	// 		currency: country?.currency
	// 	});
	//}
  onFormSubmit() {
      this.isUpdating = true;
      this.country.name =  this.countryForm.get('name')?.value;
      this.country.capital = this.countryForm.get('capital')?.value;
      this.country.currency = this.countryForm.get('currency')?.value;
      this.countryService.updateCountry(this.country).subscribe(()=>this.router.navigate(['../../'],{relativeTo:this.route}))
  }

}
