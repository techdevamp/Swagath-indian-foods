import { EmailData } from './../../_models/email.data';
import { SubscriptionsComponent } from './../subscriptions/subscriptions.component';
import { Component, OnInit } from '@angular/core';
import { ItemDetails } from 'src/app/_models/item.details';
import { UserDataSource } from './UserDataSource';
import { DataService } from 'src/app/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { SubscriptionsDataSource } from '../subscriptions/SubscriptionsDataSource';
import { SubscriptionsData } from 'src/app/_models/subscription.data';


@Component({
  selector: 'app-display-item-details',
  templateUrl: './display-item-details.component.html',
  styleUrls: ['./display-item-details.component.scss']
})
export class DisplayItemDetailsComponent implements OnInit {
  constructor(private dataService: DataService,
              private router: Router
    ,         private route: ActivatedRoute) { }
  itemDetails: ItemDetails[];
  dataSourceItems: UserDataSource;
  dataSourceSub: SubscriptionsDataSource;
  subscriptions: SubscriptionsData[];
  uploadType: string;
  displayedColumns: string[];

  /**
   * name
   */

  ngOnInit() {
    this.dataSourceItems = null;
    this.displayedColumns = null;
    this.dataSourceSub = null;
    this.route.params.subscribe(params => {
      this.uploadType = params.id;
    });
    if (this.uploadType === 'items') {
      this.displayedColumns = ['itemId', 'itemName', 'itemDescription', 'itemPrice', 'Image'];
      this.dataSourceItems = new UserDataSource(this.dataService);
      this.dataSourceItems.loadItemDetails();
    } else {
        this.displayedColumns = ['firstName', 'lastName', 'email', 'subscribed', 'send' ];
        this.dataSourceSub = new SubscriptionsDataSource(this.dataService);
        this.dataSourceSub.loadSubscriptionsDetails();
    }
  }
  public sendEmail(email: string): void {
    const emailData: EmailData = new EmailData();
    emailData.to = email;
    emailData.message = 'This is for you.... ';
    emailData.subject = 'Test Email from anugular sunil';

    this.dataService.sendEmail(emailData).subscribe(res => alert(res.result));
  }
}
