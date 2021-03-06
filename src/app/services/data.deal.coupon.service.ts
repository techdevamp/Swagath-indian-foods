import { AppConstants } from '../constants/AppConstants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse } from '../models/api.response';
import { ItemDealDetails } from '../models/item.deal.details';
import { InterceptorSkipHeader } from '../helpers/jwt.interceptor';

@Injectable({
  providedIn: 'root'
})
export class DataDealCouponService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = AppConstants.baseURL;
  }

  getAllDealItemDetails(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/readData/getItemDealLinkDetails');
  }

  getDealsDetails(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/readData/getDealDetails');
  }

  saveDealLinkChanges(itemDealDetails: ItemDealDetails[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/dealAndCoupon/saveDealLinkChanges' , itemDealDetails);
  }

  getItemDetailsByDealTypCd(dealTypCd: string): Observable<ApiResponse> {
    const params = new HttpParams().set('dealTypCd', dealTypCd);
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');

    return this.http.get<ApiResponse>(this.baseUrl + '/readData/getItemsByDealTypCd', { headers,params });
  }
}

