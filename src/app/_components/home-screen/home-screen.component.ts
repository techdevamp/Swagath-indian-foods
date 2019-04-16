import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  modelName: any;
  constructor(private router: Router) { }
  searchFC = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)]);

  ngOnInit() {
    window.localStorage.removeItem('token');
  }
  goToRegister(): void {
      this.router.navigateByUrl('/users');
  }
  goToListOfUsers(): void {
    this.router.navigateByUrl('/usersDetails');
  }
  onSearchChange(): void {

  }
  @Input('cdkTextareaAutosize')
    get enabled(): boolean { return this.enabled; }

    onFormSubmit(form: FormControl): void {
      console.log(form.value);
    }
}
