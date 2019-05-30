import { RegisterUser } from './../../_models/registerUser';
import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService, AuthenticationService } from './../../_services';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  registerUser: RegisterUser;
  loading = false;
  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) {
       // redirect to home if already logged in
       if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
    }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: this.MustMatch('password', 'confirmPassword')
    });
}
MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
    } else {
        matchingControl.setErrors(null);
    }
  };
}


// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
    this.dataService.createUser(this.registerForm.value).subscribe(res => {
      this.alertService.success('Registration successful', true);
      this.goToLoginPage();
      const artcl: RegisterUser = res.result;
      console.log(artcl.userName);
    },
(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred.
        this.alertService.error(err.error.message);
      } else {
        // Backend returns unsuccessful response codes such as 404, 500 etc.
        this.alertService.error('Backend returned status code: ' + err.status.toString());
        this.alertService.error('Response body:' + err.error);
      }
      this.loading = false;
    }
 );
  }
  goToLoginPage(): void {
    this.router.navigateByUrl('\login');
  }
}
