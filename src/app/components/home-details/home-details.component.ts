import { AppConstants } from 'src/app/constants/AppConstants';
import { AlertService } from './../../services/alert.service';
import { SharedService } from './../../services/shared.service';
import { BuyerService } from './../../services/buyer.service';
import { DataTransferService } from './../../services/data-transfer.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ItemDetails } from 'src/app/models/item.details';
import { first } from 'rxjs/operators';
import { ProductCategory } from 'src/app/models/product.category';
import { BehaviorSubject } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit {

  constructor(private buyerService: BuyerService
            , private sharedService: SharedService
            , private dataTransferService: DataTransferService
            , private alertService: AlertService) {
              this.dataTransferService.getItemDetails()
                .subscribe(res => {
                  this.itemDetails = [];
                  this.selectedCat = '';
                  this.itemDetails = res;
                  this.getData({pageIndex: this.page, pageSize: this.size});
                  }
                );
   }

  itemDetails: ItemDetails[];
  productCategories: ProductCategory[];

  itemsCount: BehaviorSubject<number>;
  selectedCat: any;
  imgUrl = AppConstants.imageURL;
  data: ItemDetails[];
  page = 0;
  size = 10;
  pageSizeOptions = [10, 20, 30];
  colsize: number;
  private isMobileResolution: boolean;

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
      this.colsize = 1;
    } else {
      this.isMobileResolution = false;
      this.colsize = 5;
    }
    this.getProductCategories();
  }

  public getProductCategories() {
    this.sharedService.getProductCategories().pipe(first()).subscribe(res => {
      this.productCategories = res.result;
      this.selectedCat = this.productCategories[0].productCategoryNm;
      this.getItemDetails(this.productCategories[0].productCategoryNm);
    },
    error => {this.alertService.error(error); }
    );
  }
  public getItemDetails(category: string) {
    this.selectedCat = category;
    this.buyerService.getItemDetailsByCategory(category).pipe(first()).subscribe(res => {
      this.itemDetails = res.result;
      this.getData({pageIndex: this.page, pageSize: this.size});
    });
  }

  addToCart(itemId: number) {
    this.itemsCount = this.dataTransferService.getItemsInCart();
    this.itemsCount.next(this.itemsCount.value + 1);
    this.dataTransferService.setItemsInCart(this.itemsCount);
  }

  getData(obj: { pageIndex: any; pageSize: any; }) {
    let index = 0;
    const startingIndex = obj.pageIndex * obj.pageSize;
    const endingIndex = startingIndex + obj.pageSize;

    this.data = this.itemDetails.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  onhover(id: any) {
    $('#' + id).okzoom({
      width: 150,
      height: 150,
      border: '1px solid black',
      shadow: '0 0 5px #000'
    });
  }

  onmouseout() {

  }
}
