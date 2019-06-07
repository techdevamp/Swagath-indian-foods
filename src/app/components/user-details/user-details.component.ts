import { DataTransferService } from './../../services/data-transfer.service';
import { ApiResponse } from './../../models/api.response';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';
import { UsersDetails } from './../../models/usersDetails';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  usersDetails: UsersDetails;
  userName: string;
  userDetailsForm: FormGroup;
  apiResponse: ApiResponse;
  constructor(private dataService: DataService, private router: Router, private formBuilder: FormBuilder
    ,         private dataTransferService: DataTransferService ) { }

  ngOnInit() {
    this.userName = this.dataTransferService.getApiResponse().result.username;
    this.userDetailsForm = this.formBuilder.group({
      id: [''],
      userName: [this.userName, Validators.nullValidator],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required]
    });

  }

  onSubmit(): void {
      this.dataService.addUserDetails(this.userDetailsForm.value).subscribe(
        (usersdetails: ApiResponse) => {
          this.usersDetails = usersdetails.result;
          this.router.navigate(['list-user']);
        });
        }
  }
