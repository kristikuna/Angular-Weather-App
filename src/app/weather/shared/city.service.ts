import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { City } from './city';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable()
export class CityService {
  cityCodes: any = [
    2172797,
    519188,
    4990729,
    4924095,
    3012874
  ];

  appId: string = '3fdd61069038068563e3c1e8e742b329';
  baseUrl: string = `https://api.openweathermap.org/data/2.5/group?id=${this.cityCodes.join()}&APPID=`;


  constructor(public http: HttpClient) { }
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.baseUrl + this.appId)
      .pipe(catchError(this.handleError<City[]>('getCities', [])));
  }

  getCity(id: number): Observable<City> {
    return this.http.get<City>(`https://api.openweathermap.org/data/2.5/weather?id=` + id + `&APPID=3fdd61069038068563e3c1e8e742b329`)
      .pipe(catchError(this.handleError<City>('getCity')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

