import { Rate, RootObject } from './../rate';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HTTPService {
private  nbpUrl = 'http://api.nbp.pl/api/exchangerates/tables/C/today/?format=json';
  constructor(private http: HttpClient) { }

  getCurrency(): Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this.nbpUrl);
  }

}
