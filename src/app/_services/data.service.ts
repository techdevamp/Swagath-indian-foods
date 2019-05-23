import { EmailData } from './../_models/email.data';
import { AppConstants } from './../constants/AppConstants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RegisterUser } from '../_models/registerUser';
import { ApiResponse } from '../_models/api.response';
import { UsersDetails } from '../_models/usersDetails';
import { SubscriptionsData } from '../_models/subscription.data';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = AppConstants.baseURL;
  }
  getUserDetails(listUsers: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/userDetails' + listUsers);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/userDetails/findUserById/' + id);
  }

  createUser(user: RegisterUser): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/registeration/registerUser', user);
  }
  updateUser(user: RegisterUser): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + '/userDetails/updateUserDetails', user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + '/userDetails/deleteUser/' + id);
  }

  addUserDetails(usersDetails: UsersDetails): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/userDetails/addUserDetails', usersDetails);
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

  getItemDetails(category: string): Observable<ApiResponse> {
    const params = new HttpParams().set('category', category);
    return this.http.get<ApiResponse>(this.baseUrl + '/upload/getItemDetails', { params });
  }

    getItemDetailsByFileId(fileId: any): Observable<ApiResponse> {
    const params = new HttpParams().set('fileId', fileId);
    return this.http.get<ApiResponse>(this.baseUrl + '/upload/getItemDetailsByFileId', { params });
  }

  getSubscriptionsByFileId(fileId: any): Observable<ApiResponse> {
    const params = new HttpParams().set('fileId', fileId);
    return this.http.get<ApiResponse>(this.baseUrl + '/upload/getSubscriptionsByFileId', { params });
  }

  getProductCategories(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/upload/getProductCategories');
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
  subscribeEmail(subscriptionsData: SubscriptionsData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/upload/subscribe' , subscriptionsData);
  }

}
// Access-Control-Allow-Origin: *
// Control-Allow-Origin
