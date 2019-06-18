import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services';
import { Router } from '@angular/router';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
                private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available

        if (request.headers.has(InterceptorSkipHeader)) {
            const headers = request.headers.delete(InterceptorSkipHeader);
            return next.handle(request.clone({ headers }));
        }else{
            const currentUser = this.authenticationService.currentUserValue;
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: 'Bearer ' + currentUser.token
                    }
                });
            } else {
            this.authenticationService.logout();
              this.router.navigate(['/login']);
          //  this.router.navigate(['buyer/home']);
            }

            return next.handle(request);
        }
    }
}
