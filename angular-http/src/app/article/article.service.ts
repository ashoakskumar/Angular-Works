import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Article } from './article';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { } 

  articleURL = '/api/articles';

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleURL).pipe(
      tap(articles => console.log('Number of Articles: '  +  articles.length)),
      catchError(this.handleError)
    );
  }
  createArticle(article:Article): Observable<number> {
    let httpHeader= new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<Article>(this.articleURL +'/' +article.id, article, {
      headers: httpHeader,
      observe: 'response'
    }).pipe(
      map(res => res.status),
      catchError(this.handleError)
    )
  }
  getArticleById(articleId: number): Observable<Article> {
    return this.http.get<Article>(this.articleURL + '/' + articleId).pipe(
      tap(article => console.log(article.id +' '+ article.category )),
      catchError(this.handleError)
    )
  }
  updateArticle(article:Article): Observable<number> {
    let httpHeader = new HttpHeaders({
      'Content-Type' : 'application/json'
    })
    return this.http.put<Article>(this.articleURL+'/'+article.id,article, {
      headers: httpHeader,
      observe: 'response'
    }).pipe(
      map(res => res.status),
      catchError(this.handleError)
    );
  }
  deleteArticleById(articleId: number): Observable<number>{
    return this.http.delete<number>(this.articleURL +'/'+articleId).pipe(
      tap(status => console.log('Status: '+ status)),
      catchError(this.handleError)
    );
  }
  private handleError(error: any){
    console.error(error);
    return throwError(error);
  }
}
