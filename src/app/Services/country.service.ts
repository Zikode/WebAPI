import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Models/Country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sports } from '../Models/Sports';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
Sport: Sports;
  constructor(private http:HttpClient) { }
  
  data: Observable<any>;

  countryUrl: string = 'https://localhost:44300/api/country';

  
  getCountries(): Observable<Country[]>
  {
    return this.http.get<Country[]>(this.countryUrl);
  }
  
  saveCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.countryUrl, country, httpOptions);
  }

   deleteCountry(country: Country):Observable<Country>
   {
     console.log(country);
  const url =`https://localhost:44300/api/country/${country.countryId}`;
  return this.http.delete<Country>(url, httpOptions);
  }

  updateCountry(country: Country):Observable<Country>
  {
    const url =`https://localhost:44300/api/country/${country.countryId}`;
    return this.http.put<Country>(url, country, httpOptions);
  }
  
  getCountryById(Sport: Sports): Observable<Country[]>
  {
    const url =`https://localhost:44300/api/country/${Sport}`;
    return this.http.get<Country[]>(url);
  }

  
}
