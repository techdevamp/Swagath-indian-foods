import { AppConstants } from './../constants/AppConstants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RegisterUser } from '../models/registerUser';
import { ApiResponse } from '../models/api.response';
import { UsersDetails } from '../models/usersDetails';


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
}
// Access-Control-Allow-Origin: *
// Control-Allow-Origin
