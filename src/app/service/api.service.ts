import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie, Res } from './api.interface';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  endpoint = (url: string) => `https://api.themoviedb.org/3${url}?api_key=${environment.apiKey}`;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getTrending(): Observable<Res> {
    return this.httpClient.get<Res>(this.endpoint("/trending/all/week"))
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie[]>(this.endpoint("/movie/"+id))
      .pipe(
        retry(1),
        catchError(this.processError)
      )
  }

  processError(err: ErrorEvent|any) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }
}
