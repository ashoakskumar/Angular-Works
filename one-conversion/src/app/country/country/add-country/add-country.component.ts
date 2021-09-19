import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
  isAdding= false;
  constructor(private countryService: CountryService,private route:ActivatedRoute,private router: Router,
    private formBuilder:FormBuilder,private dialogService:DialogService) { }
    countryForm = this.formBuilder.group({
      name:'',
      capital:'',
      currency:''
    })
  ngOnInit(): void {
  }
    onFormSubmit() {
      this.isAdding = true;
      let name = this.countryForm.get('name')?.value;
      let capital = this.countryForm.get('capital')?.value;
      let currency = this.countryForm.get('currency')?.value;

      let country = new Country(0,name,capital,currency);
      this.countryService.addCountry(country).subscribe(()=>this.router.navigate(['../list'],{relativeTo:this.route}))
    }
    // canDeactivate(): Observable<boolean> | boolean {
    //   if(!this.isAdding && this.countryForm.dirty) {
    //       return this.dialogService.confirm('discard unsaved country ? ');
    //   }
    //   return true;
    // }
}
