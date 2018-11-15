import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import{Event} from '../Models/event';
import { Observable } from 'rxjs';
import { Tournament } from '../Models/tournament';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

   eventsUrl: string = 'https://localhost:44300/api/event';

  constructor(private http:HttpClient) { }


  getEvents(): Observable<Event[]>
  {
    return this.http.get<Event[]>(this.eventsUrl);
  }
  
  saveEvent(event: Event): Observable<Event> {
    const url =`https://localhost:44300/api/event`;
    return this.http.post<Event>(this.eventsUrl, event, httpOptions);
  }

  deleteEvent(event: Event):Observable<Event>
  {
  const url =`https://localhost:44300/api/event/${event.eventId}`;
  return this.http.delete<Event>(url, httpOptions);
  }

  updateEvent(event: Event):Observable<Event>
  {
    const url =`https://localhost:44300/api/event/${event.eventId}`;
    return this.http.put<Event>(url, event, httpOptions);
  }  
  
  getEventById(tournamnet: Tournament): Observable<Event[]>
  {
    const url =`https://localhost:44300/api/event/${tournamnet}`;
    return this.http.get<Event[]>(url);
  } 
}

