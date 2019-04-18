import { AppConstants } from './../constants/AppConstants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RegisterUser } from '../_models/registerUser';
import { ApiResponse } from '../_models/api.response';
import { UsersDetails } from '../_models/usersDetails';


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
    alert(this.baseUrl + '/deleteUser/' + id);
    return this.http.delete<ApiResponse>(this.baseUrl + '/userDetails/deleteUser/' + id);
  }

  addUserDetails(usersDetails: UsersDetails): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/userDetails/addUserDetails', usersDetails);
  }

  uploadFile(file: FormData): Observable<ApiResponse> {

    return this.http.post<ApiResponse>(this.baseUrl + '/upload/dataFile', file);
  }

  getItemDetails(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/upload/getItemDetails');
  }
}
// Access-Control-Allow-Origin: *
// Control-Allow-Origin
