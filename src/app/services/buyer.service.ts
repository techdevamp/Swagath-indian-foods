import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/AppConstants';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api.response';
import { SubscriptionsData } from '../models/subscription.data';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { InterceptorSkipHeader } from '../helpers/jwt.interceptor';

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
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');

    return this.http.get<ApiResponse>(this.baseUrl + '/readData/getItemDetailsByCategory', {headers, params});
  }

  subscribeEmail(subscriptionsData: SubscriptionsData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/readData/subscribe' , subscriptionsData);
  }

  getImageByImageType(imageType: string): Observable<ApiResponse> {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    const params = new HttpParams().set('imageType', imageType);
    return this.http.get<ApiResponse>(this.baseUrl + '/readData/getImageByImageType', { headers, params});
  }

  getImageByImageTypeAndActiveInd(imageType: string, activeInd: string): Observable<ApiResponse> {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    const params = new HttpParams().set('imageType', imageType);
    params.append('activeInd', activeInd);
    return this.http.get<ApiResponse>(this.baseUrl + '/readData/getImageByImageType', { headers, params});
  }
}
