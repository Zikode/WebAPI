import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '../Models/Tournament';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  
  GetEventById(Tournament: Tournament): Observable<Event[]>
  {
    const url =`https://localhost:44300/api/event/${Tournament}`;
    return this.http.get<Event[]>(url);
  }
  
}
