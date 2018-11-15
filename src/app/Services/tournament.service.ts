import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '../Models/Tournament';
import { Country } from '../Models/Country';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  tournamentsUrl: string = 'https://localhost:44300/api/tournament';


  constructor(private http:HttpClient) { }

  GetTournamentById(Country: Country): Observable<Tournament[]>
  {
    const url =`https://localhost:44300/api/tournament/${Country}`;
    return this.http.get<Tournament[]>(url);
  }
}
