import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Market } from '../Models/Market';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private http:HttpClient) { }
  
  getMarketById(market:Market): Observable<Market[]>
  {
    const url =`https://localhost:44300/api/market/${market}`;
    return this.http.get<Market[]>(url);
  }
  
  
  
}
