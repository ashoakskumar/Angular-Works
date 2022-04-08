import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Person } from './pipe-example/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:1000/person';
  getPersonDetails() :Observable<Person> {
    return this.http.get<Person>('../assets/person-datas.json').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  private extractData(response: any): Person {
    let body = response;
    return body;
  }
  private handleError(error:any){
    return throwError(error);
  }
  savePerson(person:Person):Observable<Person> {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('content-type', 'application/json');
    let options = {headers : httpHeaders};
    return this.http.post<Person>(this.url, person, options);
  }
  getPerson():Observable<Person> {
    return this.http.get<Person>('http://localhost:1000/get/person').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  putPerson(person:Person) :Observable<Person> {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('content-type', 'application/json');
    let options = {headers : httpHeaders};
    return this.http.put('http://localhost:1000/put/person',person,options).pipe(
      map(this.extractData),
      catchError(this.errorHandle)
    )
  }
  deletePerson(person:Person):Observable<Person> {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('content-type', 'application/json');
    let options = {headers : httpHeaders};
    return this.http.delete('http://localhost:1000/delete/person',options).pipe(map(this.extractData),catchError(this.errorHandle));
  }
  postErrorCall(person:Person):Observable<Person> {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('content-type','application/json');
    let options = {headers : httpHeaders};
    return this.http.post('http://localhost:1000/error/person',person,options).pipe(map(this.extractData),catchError(this.errorHandle));
  }
  patchPerson(person:Person):Observable<Person> {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('content-type','application/json');
    let options = {headers : httpHeaders};
    return this.http.patch('http://localhost:1000/patch/person',person,options).pipe(map(this.extractData),catchError(this.errorHandle));
  }
  errorHandle(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.errorMessage;
    } else {
      errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => errorMessage);
  }
  upload(file:File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('files',file);
    const headers = new HttpHeaders();
    headers.set('responsetype','application/json');
    headers.append('reportProgress','true');
    const req = new HttpRequest('POST','http://localhost:1000/upload',formData,{headers:headers});
    return this.http.request(req);
  }
  getFiles():Observable<any> {
    return this.http.get('http://localhost:1000/files')
  }
}
