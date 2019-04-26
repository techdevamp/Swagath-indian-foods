import { Component } from '@angular/core';
import { AuthenticationService } from './_services';
import { RegisterUser } from './_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: RegisterUser;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['login']);
    }

    homeDetails() {
      this.router.navigate(['home-details']);
    }

    loginScreen() {
      this.router.navigate(['login']);
    }

    adminScreen() {
      this.router.navigate(['side-nav-list']);
    }
}
