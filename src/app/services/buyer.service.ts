import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/AppConstants';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api.response';
import { SubscriptionsData } from '../models/subscription.data';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = AppConstants.baseURL;
  }

  getItemDetailsByCategory(category: string): Observable<ApiResponse> {
    const params = new HttpParams().set('category', category);
    return this.http.get<ApiResponse>(this.baseUrl + '/readData/getItemDetailsByCategory', { params });
  }

  subscribeEmail(subscriptionsData: SubscriptionsData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/readData/subscribe' , subscriptionsData);
  }
}
