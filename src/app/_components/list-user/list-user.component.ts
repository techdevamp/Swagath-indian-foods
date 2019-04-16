import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_services/data.service';
import { ApiResponse } from 'src/app/_models/api.response';
import { UsersDetails } from 'src/app/_models/usersDetails';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  usersDetails: UsersDetails[] = null;
  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      alert('no token');
      this.router.navigate(['login']);
      return;
    }
    this.getUserDetails();
  }

  getUserDetails(): void {
      this.dataService.getUserDetails('/listUsers').subscribe(
        (usersdetails: ApiResponse) => {
          this.usersDetails = usersdetails.result;
          console.log(usersdetails);
        }, (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred.
            alert(err.error.message);
          }
        });
  }
  deleteUser(user: UsersDetails): void {
    this.dataService.deleteUser(user.id)
      .subscribe( data => {
        // this.usersDetails = this.usersDetails.filter(u => u !== user);
        this.getUserDetails();
      });
  }

  editUser(user: UsersDetails): void {
    window.localStorage.removeItem('editUserId');
    window.localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-user']);
  }
  goToAddUser(): void {
    this.router.navigateByUrl('/users');
  }
}
