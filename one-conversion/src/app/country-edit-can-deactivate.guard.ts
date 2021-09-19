import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryEditComponent } from './country/country/country-list/country-edit/country-edit.component';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class CountryEditCanDeactivateGuard implements CanDeactivate<CountryEditComponent> {
  constructor(private dialogService: DialogService){}
  canDeactivate(
    component: CountryEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      console.log('URL: '+ url);
      if(!component.isUpdating && component.countryForm.dirty) {
        component.isUpdating = false;
        return this.dialogService.confirm('Discard changes for country ? ');
      }
    return true;
  }
  
}
