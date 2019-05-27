import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService, DataTransferService } from './../../_services';

@Component({templateUrl: 'login.component.html',
selector: 'app-login',
styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    invalidLogin = false;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private dataTransferService: DataTransferService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
          //  this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
      window.localStorage.removeItem('token');
      this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['add-userDetails'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    register() {
      this.router.navigate(['admin/register']);
    }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        const loginPayload = {
          username: this.f.userName.value,
          password: this.f.password.value
        };
        this.loading = true;
        this.authenticationService.login(loginPayload)
            .pipe(first())
            .subscribe(
                data => {
                  if (data.status === 200) {
                    window.localStorage.setItem('token', data.result.token);
                    this.dataTransferService.setApiResponse(data);
                    // this.router.navigate(['add-userDetails']);
                    this.router.navigate(['seller/side-nav-list']);
                  } else {
                    this.invalidLogin = true;
                    this.alertService.success(data.message);
                  }
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    @Input() error: string | null;
}
