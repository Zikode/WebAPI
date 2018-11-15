import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BetType } from '../Models/BetType';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BetTypeService {

  constructor(private http:HttpClient) { }
  
  getBetTypeById(event: Event): Observable<BetType[]>
  {
    const url =`https://localhost:44300/api/bettype/${event}`;
    return this.http.get<BetType[]>(url);
  }
}
