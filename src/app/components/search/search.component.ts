import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { BuyerService } from 'src/app/services/buyer.service';
import { ItemDetails } from 'src/app/models/item.details';
import { DataTransferService, AlertService } from 'src/app/services';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from 'src/app/models/api.response';
import { AppConstants } from 'src/app/constants/AppConstants';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private buyerService: BuyerService,
              private dataTransferService: DataTransferService,
              private alertService: AlertService) { }
  itemDetails: BehaviorSubject<ApiResponse>;
  results: ItemDetails[];
  queryField: FormControl = new FormControl();
  imgUrl = AppConstants.imageURL;
  ngOnInit() {

  }

  searchItem() {
    if (this.queryField.value === '') {
      this.results = null;
    }
    this.queryField.valueChanges
    .debounceTime(200)
    .distinctUntilChanged()
    .switchMap((query) =>
             this.buyerService.searchItemByItemName(query))
              .subscribe( res => {
                if (res.status === 400) {
                  this.alertService.error(res.message);
                } else {
                    this.results = res.result;

                    /*this.itemDetails = this.dataTransferService.getApiResponseSub();
              this.itemDetails.next(res);
                    this.dataTransferService.setApiResponse(res);
                    alert(JSON.stringify(res.result));*/
              }

        });
  }
}
