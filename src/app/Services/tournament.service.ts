import { Injectable } from '@angular/core';
import { Tournament } from '../Models/tournament';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getTournaments(): Observable<Tournament[]>
  {
    return this.http.get<Tournament[]>(this.tournamentsUrl);
  }

  savetournament(tournament: Tournament): Observable<Tournament> {
    return this.http.post<Tournament>(this.tournamentsUrl, tournament, httpOptions);
  }

   deletetournament(tournament: Tournament):Observable<Tournament>
   {
     console.log(tournament);
  const url =`https://localhost:44300/api/tournament/${tournament.tournamentId}`;
  return this.http.delete<Tournament>(url, httpOptions);
  }

  updatetournament(tournament: Tournament):Observable<Tournament>
  {
    //console.log(Sport);
    const url =`https://localhost:44300/api/tournament/${tournament.tournamentId}`;
    return this.http.put<Tournament>(url, tournament, httpOptions);
  }

  getTournamnetById(country: Country): Observable<Tournament[]>
  {
    const url =`https://localhost:44300/api/tournament/${country}`;
    return this.http.get<Tournament[]>(url);
  }

}
