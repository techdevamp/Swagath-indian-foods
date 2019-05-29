import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConstants } from '../constants/AppConstants';
import { Observable } from 'rxjs';
import { ApiResponse } from '../_models/api.response';
import { EmailData } from '../_models/email.data';
import { PhoneData } from '../_models/phone.data';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = AppConstants.baseURL;
  }

  uploadFile(file: FormData, uploadType: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/upload/' + uploadType, file);
  }

  deleteFile(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + '/upload/deleteFile/' + id);
  }

  getFileDetails(uploadType: string): Observable<ApiResponse> {
    const params = new HttpParams().set('fileType', uploadType);
    return this.http.get<ApiResponse>(this.baseUrl + '/upload/getFileDetails', {params});
  }

  getItemDetailsByFileId(fileId: any): Observable<ApiResponse> {
    const params = new HttpParams().set('fileId', fileId);
    return this.http.get<ApiResponse>(this.baseUrl + '/upload/getItemDetailsByFileId', { params });
  }

  getSubscriptionsByFileId(fileId: any): Observable<ApiResponse> {
    const params = new HttpParams().set('fileId', fileId);
    return this.http.get<ApiResponse>(this.baseUrl + '/upload/getSubscriptionsByFileId', { params });
  }

  getSubscriptionDetails(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/upload/getSubscriptionsDetails');
  }

  getAllItemDetails(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/upload/getAllItemDetails');
  }

  sendEmail(emailData: EmailData[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/upload/sendEmail' , emailData);
  }

  sendText(phoneData: PhoneData[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/upload/sendText' , phoneData);
  }
}
