import { AppConstants } from '../constants/AppConstants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse } from '../_models/api.response';
import { ItemDealDetails } from '../_models/item.deal.details';



@Injectable({
  providedIn: 'root'
})
export class DataDealCuponService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = AppConstants.baseURL;
  }

  getAllDealItemDetails(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/dealAndCupon/getItemDealLinkDetails');
  }

  getDealsDetails(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/dealAndCupon/getDealDetails');
  }

  saveDealLinkChanges(itemDealDetails: ItemDealDetails[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/dealAndCupon/saveDealLinkChanges' , itemDealDetails);
  }

  getItemDetailsByDealTypCd(dealTypCd: string): Observable<ApiResponse> {
    const params = new HttpParams().set('dealTypCd', dealTypCd);
    return this.http.get<ApiResponse>(this.baseUrl + '/dealAndCupon/getItemsByDealTypCd', { params });
  }
}

