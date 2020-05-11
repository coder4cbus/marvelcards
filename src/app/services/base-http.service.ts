import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export abstract class BaseHttpService {

  headers = new HttpHeaders().set('x-apikey', '5c3f94b966292476821ca01e');
  baseURL = 'https://marvelheroes-1d22.restdb.io/rest/marvelcards';

  constructor( protected readonly httpClient: HttpClient ) { }

  public get<TResult>(url: string, params?: any): Observable<TResult> {
    return this.httpClient
      .get<TResult>(this.baseURL+url, {headers: this.headers})
  }


  // getHeroes() {
  //   return this.http.get('https://marvelheroes-1d22.restdb.io/rest/heroes', {headers: this.headers});
  //   // return this.http.get('https://marvelheroes-1d22.restdb.io/rest/heroes?skip=10&max=10', {headers: this.headers});
  // }

  
}