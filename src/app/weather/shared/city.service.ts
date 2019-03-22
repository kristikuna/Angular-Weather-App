import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { City } from './city';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class CityService {
  appId: string = '3fdd61069038068563e3c1e8e742b329';
  baseUrl: string = `https://api.openweathermap.org/data/2.5/group?id=2172797&APPID=`;

  cityCodes = [
    2172797,
    2172797,
    2172797
  ]

  constructor(public http: HttpClient) { }

  getCities(...cityCodes): Observable<City[]> {
    console.log('hey' + cityCodes + "BYE");
    //array.join to create string of coma sep values and use to append url
    return this.http.get<City[]>(this.baseUrl + this.appId)
      .pipe(catchError(this.handleError<City[]>('getCities', [])))
  };

  getCity(id: number) {
    return CITIES.find(city => city.id === id)
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}

