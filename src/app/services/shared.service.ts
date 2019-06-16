import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../constants/AppConstants';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api.response';
import { InterceptorSkipHeader } from '../helpers/jwt.interceptor';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = AppConstants.baseURL;
  }

  getProductCategories(): Observable<ApiResponse> {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');

    return this.http.get<ApiResponse>(this.baseUrl + '/readData/getProductCategories',{headers});
  }
}
