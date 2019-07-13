import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BuyerService } from 'src/app/services/buyer.service';
import { ItemDetails } from 'src/app/models/item.details';
import { DataTransferService, AlertService } from 'src/app/services';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from 'src/app/models/api.response';
import { AppConstants } from 'src/app/constants/AppConstants';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private buyerService: BuyerService,
              private dataTransferService: DataTransferService,
              private alertService: AlertService) { }
  itemDetails: BehaviorSubject<ItemDetails>;
  results: ItemDetails[];
  queryField: FormControl = new FormControl();
  imgUrl = AppConstants.imageURL;
  displayList: boolean;
  ngOnInit() {
    this.queryField.setValue('');
  }

  onBlur() {
      this.displayList = false;
  }

  onFocus() {
    this.searchItem();
  }

  searchItem() {
    if (this.queryField.value === '') {
      this.displayList = false;
      this.results = null;
    }
    this.queryField.valueChanges.pipe(
    debounceTime(200)
    , distinctUntilChanged()
    , switchMap((query) =>
             this.buyerService.searchItemByItemName(query)))
              .subscribe( res => {
                if (res.status === 400) {
                  this.displayList = false;
                  this.results = null;
                  this.alertService.error(res.message);
                } else {
                    this.results = res.result;
                    this.displayList = true;
                    /*this.itemDetails = this.dataTransferService.getApiResponseSub();
              this.itemDetails.next(res);
                    this.dataTransferService.setApiResponse(res);
                    alert(JSON.stringify(res.result));*/
              }

        });
  }

  searchResults(itemDetail: any) {
    this.itemDetails = this.dataTransferService.getItemDetails();
    this.itemDetails.next(itemDetail);
    this.dataTransferService.setItemDetails(this.itemDetails);
    this.displayList = false;
    this.queryField.setValue('');
    this.itemDetails = null;
  }
}
