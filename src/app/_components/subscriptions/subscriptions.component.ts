import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AlertService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionsDataSource } from './SubscriptionsDataSource';
import { SubscriptionsData } from 'src/app/_models/subscription.data';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { EmailData } from 'src/app/_models/email.data';
import { first } from 'rxjs/operators';
import { SellerService } from 'src/app/_services/seller.service';
import { PhoneData } from 'src/app/_models/phone.data';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit, AfterViewInit {

  constructor(private sellerService: SellerService,
              private route: ActivatedRoute,
              private alertService: AlertService) { }
  dataSourceSub: SubscriptionsDataSource;
  subscriptions: SubscriptionsData[];
  fileId: string;
  displayedColumnsSub: string[];
  selection = new SelectionModel<SubscriptionsData>(true, []);
  textMessage: string;
  emailMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  this.route.params.subscribe(params => {
  this.fileId = params.id;
  });
  this.displayedColumnsSub = ['firstName', 'lastName', 'email', 'phone', 'subscribed', 'select' ];
  this.dataSourceSub = new SubscriptionsDataSource(this.sellerService);
  this.dataSourceSub.loadSubscriptionsDetails(this.fileId);
  }
/*
* Set the paginator after the view init since this component will
* be able to query its view for the initialized paginator.
*/
  ngAfterViewInit() {
  this.dataSourceSub.paginator = this.paginator;
  this.dataSourceSub.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceSub.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSourceSub.data.forEach(row => this.selection.select(row));
  }


  public sendEmail(email: SubscriptionsData[]): void {
    const emailData: EmailData[] = [];
    let emailDataInd = new EmailData();
    email.forEach(element => {emailDataInd.to = element.email;
                              emailDataInd.message = this.emailMessage;
                              emailDataInd.subject = 'Swagath Indian Grocery!';
                              emailData.push(emailDataInd);
                              emailDataInd = new EmailData();
    });

    this.sellerService.sendEmail(emailData).pipe(first()).subscribe(res => {
        this.alertService.success(res.result, false);
        this.emailMessage = '';
      });
  }

  public sendText(text: SubscriptionsData[]): void {

    const phoneData: PhoneData[] = [];
    let phoneDataInd = new PhoneData();
    text.forEach(element => {
      phoneDataInd.textBody = this.textMessage;
      phoneDataInd.toPhone = '+1' + element.phone;
      phoneData.push(phoneDataInd);
      phoneDataInd = new PhoneData();
    });

    this.sellerService.sendText(phoneData).pipe(first()).subscribe(res => {
        this.alertService.success(res.result, false);
        this.textMessage = '';
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceSub.filter = filterValue;
  }
}
