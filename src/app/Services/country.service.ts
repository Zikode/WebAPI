import { Injectable } from '@angular/core';
import { Country } from '../Models/Country';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sport } from '../Models/Sport';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient ) { }

  getCountryById(Sport: Sport): Observable<Country[]>
  {
    const url =`https://localhost:44300/api/country/${Sport}`;
    return this.http.get<Country[]>(url);
  }

}
