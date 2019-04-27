import { Component } from '@angular/core';
import { AuthenticationService } from './_services';
import { RegisterUser } from './_models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: RegisterUser;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['login']);
    }

    home(path: any) {
      this.router.navigate([path]);
    }

    loginScreen() {
      this.router.navigate(['login']);
    }

    adminScreen() {
      this.router.navigate(['side-nav-list']);
    }
}
