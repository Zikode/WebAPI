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



  marketTypeUrl: string = 'https://localhost:44300/api/market';

  
  getMarket(): Observable<Market[]>
  {
    return this.http.get<Market[]>(this.marketTypeUrl);
  }
  
  saveMarket(market: Market): Observable<Market> {
    return this.http.post<Market>(this.marketTypeUrl, market, httpOptions);
  }

   deleteMarket(market: Market):Observable<Market>
   {
  const url =`https://localhost:44300/api/market/${market.marketId}`;
  return this.http.delete<Market>(url, httpOptions);
  }

  updateMarket(market: Market):Observable<Market>
  {
    const url =`https://localhost:44300/api/market/${market.marketId}`;
    return this.http.put<Market>(url, market, httpOptions);
  }  
  
}
