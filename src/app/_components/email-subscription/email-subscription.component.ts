import { SubscriptionsData } from 'src/app/_models/subscription.data';
import { DataService } from 'src/app/_services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-email-subscription',
  templateUrl: './email-subscription.component.html',
  styleUrls: ['./email-subscription.component.scss']
})
export class EmailSubscriptionComponent implements OnInit {

  emailAddress: FormControl;
  phoneNo: FormControl;
  subscriptionsData: SubscriptionsData;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.emailAddress = new FormControl('',  [
      Validators.email
    ]);
    this.phoneNo = new FormControl('',  [
      Validators.maxLength(10),
      Validators.minLength(10)
    ]);
  }

  subscribe() {
    if (this.emailAddress.valid && this.phoneNo.valid) {
      this.subscriptionsData = new SubscriptionsData();
      this.subscriptionsData.email = this.emailAddress.value;
      this.subscriptionsData.phone = this.phoneNo.value;
      this.subscriptionsData.subscribed = true;
      this.dataService.subscribeEmail(this.subscriptionsData).pipe(first()).subscribe(res => {
        this.emailAddress.reset();
        this.phoneNo.reset();
        alert(res.message);
      });
    }
  }
}
