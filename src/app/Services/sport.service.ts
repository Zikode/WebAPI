import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sport } from '../Models/Sport';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class SportService {
  
sportsUrl: string = 'https://localhost:44300/api/sport';

  constructor(private http:HttpClient) { }

  getSports(): Observable<Sport[]>
  {
    return this.http.get<Sport[]>(this.sportsUrl);
  }
}
