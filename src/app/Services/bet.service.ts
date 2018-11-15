import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Bet } from '../Models/Bet';
import { Observable } from 'rxjs';
import { Users } from '../Models/Users';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http:HttpClient) { }

  addBet(bet: Bet): Observable<Bet> {
    const url =`https://localhost:44300/api/Bet`;
return this.http.post<Bet>(url, bet, httpOptions);
}


updateUserBalance(User: Users):Observable<Users>
{
  const url =`https://localhost:44300/api/Bet/${User.userID}`;
  return this.http.put<Users>(url, User, httpOptions);
}

}
