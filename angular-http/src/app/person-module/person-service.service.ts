import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgeStart } from './person/model';
@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http: HttpClient) { }
  getAgeStartFrom(): Observable<any> {
    const val = this.http.get<AgeStart>('../assets/person-data.json')
    return of(18);
  }
}
