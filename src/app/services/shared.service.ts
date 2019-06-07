import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants/AppConstants';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api.response';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = AppConstants.baseURL;
  }

  getProductCategories(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/readData/getProductCategories');
  }
}
