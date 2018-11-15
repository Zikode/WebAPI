import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport } from '../Models/Sport';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EventBrowserService {

  constructor(private http: HttpClient) { }

  GetEventById(Sport: Sport): Observable<Event[]>
  {
    const url =`https://localhost:44300/api/eventbrowser/${Sport}`;
    return this.http.get<Event[]>(url);
  }

}
