import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import { UsersDetails } from './../../models/usersDetails';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: UsersDetails;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    const userId = window.localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      middleName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.dataService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.dataService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['list-user']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
