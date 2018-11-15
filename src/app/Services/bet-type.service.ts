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

 betTypeUrl: string = 'https://localhost:44300/api/BetType';

  
  getBetTypes(): Observable<BetType[]>
  {
 

    return this.http.get<BetType[]>(this.betTypeUrl);
  }
  
  saveBetType(betType: BetType): Observable<BetType> {
    return this.http.post<BetType>(this.betTypeUrl, betType, httpOptions);
  }

   deleteBetType(betType: BetType):Observable<BetType>
   {
  const url =`https://localhost:44300/api/BetType/${betType.betTypeId}`;
  return this.http.delete<BetType>(url, httpOptions);
  }

  updateBetType(betType: BetType):Observable<BetType>
  {
    const url =`https://localhost:44300/api/BetType/${betType.betTypeId}`;
    return this.http.put<BetType>(url, betType, httpOptions);
  }
  
  
}
