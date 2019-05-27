import { DataTransferService } from './_services/data-transfer.service';
import { Component } from '@angular/core';
import { AuthenticationService } from './_services';
import { RegisterUser } from './_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: RegisterUser;
  itemsCount: number;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private dataTransferService: DataTransferService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.dataTransferService
        .getItemsInCart()
        .subscribe((itemCount: any) => (this.itemsCount = itemCount));
    }

    logout() {
        this.authenticationService.logout();
        this.loginScreen();
    }

    home(path: any) {
      if (!this.currentUser ) {
        this.logout();
      }
      this.router.navigate([path]);
    }

    loginScreen() {
      this.router.navigate(['login']);
    }

    adminScreen() {
      if (!this.currentUser) {
        this.logout();
      }
      this.router.navigate(['seller/side-nav-list']);
    }
}
