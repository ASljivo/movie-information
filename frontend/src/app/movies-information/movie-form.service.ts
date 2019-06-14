import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieFormService {
  httpOptions: Object = {};
  url: string;

  constructor(private http: HttpClient) {}

  getMovies(data: Movie): Observable<Movie[]> {
    this.url = `${environment.baseEndPoint}data/movies`;

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams()
        .set('title', data.title)
        .set('type', data.type)
        .set('plot', data.plot)
        .set('year', String(data.year))
        .set('actor', data.actor)
    };

    return this.http.get(this.url, this.httpOptions).pipe(
      map((res: Movie[]) => {
        return res;
      })
    );
  }

  getFormRequests(): Observable<Movie[]> {
    this.url = `${environment.baseEndPoint}data/requests`;

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.url, this.httpOptions).pipe(
      map((res: Movie[]) => {
        return res;
      })
    );
  }
}
