import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderOrDiscountCandidates } from '../model/orderOrDiscountCandidates';
import { Commodity } from '../model/commodity';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://localhost:8080/app/commodity'

  constructor(private httpClient: HttpClient) { }

  getStats(params: String):Observable<OrderOrDiscountCandidates> {
    return this.httpClient.get<any>(this.url + params);
  }

  getCommodity(id: string | null): Observable<Commodity> {
    return this.httpClient.get<Commodity>(`${this.url}/${id}`);
  }

}
