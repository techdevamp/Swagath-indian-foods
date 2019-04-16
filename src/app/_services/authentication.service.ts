import { ApiResponse } from './../_models/api.response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConstants } from './../constants/AppConstants';
import { RegisterUser } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<RegisterUser>;
    public currentUser: Observable<RegisterUser>;
    baseUrl: string;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<RegisterUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.baseUrl = AppConstants.baseURL;
    }

    public get currentUserValue(): RegisterUser {
        return this.currentUserSubject.value;
    }

    login(loginPayload: { username: any; password: any; }) {
        return this.http.post<ApiResponse>(this.baseUrl + '/login/authenticate', loginPayload)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user.result);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
