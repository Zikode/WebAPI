import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sports } from '../Models/Sports';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class SportsService {

data: Observable<any>;

sportsUrl: string = 'https://localhost:44300/api/sport';

  constructor(private http:HttpClient) { }

  getSports(): Observable<Sports[]>
  {
    return this.http.get<Sports[]>(this.sportsUrl);
  }
  
  saveSport(sport: Sports): Observable<Sports> {
    return this.http.post<Sports>(this.sportsUrl, sport, httpOptions);
  }

  deleteSport(sport: Sports):Observable<Sports>
  {
  const url =`https://localhost:44300/api/Sport/${sport.sportId}`;
  return this.http.delete<Sports>(url, httpOptions);
  }

  updateSport(Sport: Sports):Observable<Sports>
  {
    //console.log(Sport);
    const url =`https://localhost:44300/api/Sport/${Sport.sportId}`;
    return this.http.put<Sports>(url, Sport, httpOptions);
  }
  
}
