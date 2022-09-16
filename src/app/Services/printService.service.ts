import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TradingData } from '../models/TradingData';

@Injectable({
  providedIn: 'root',
})
export class PrintServiceService {
  private baseUrl = 'https://fx-trading-finzly.herokuapp.com/';
  constructor(private http: HttpClient) {}

  printTrade(): Observable<TradingData[]> {
    return this.http.get<TradingData[]>(`${this.baseUrl}printtrade`);
  }
  printRate(): Observable<Object> {
    return this.http.get(`${this.baseUrl}printrate/`);
  }
}
