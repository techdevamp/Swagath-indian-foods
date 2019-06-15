import { AppConstants } from 'src/app/constants/AppConstants';
import { AlertService } from './../../services/alert.service';
import { SharedService } from './../../services/shared.service';
import { BuyerService } from './../../services/buyer.service';
import { DataTransferService } from './../../services/data-transfer.service';
import { Component, OnInit} from '@angular/core';
import { ItemDetails } from 'src/app/models/item.details';
import { first } from 'rxjs/operators';
import { ProductCategory } from 'src/app/models/product.category';
import { BehaviorSubject } from 'rxjs';

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
   }
  itemDetails: ItemDetails[];
  productCategories: ProductCategory[];

  itemsCount: BehaviorSubject<number>;
  selectedCat: any;
  imgUrl = AppConstants.imageURL;

  ngOnInit() {
    this.getProductCategories();
  }
  public getProductCategories() {
    this.sharedService.getProductCategories().pipe(first()).subscribe(res => {
      this.productCategories = res.result;
      this.selectedCat = this.productCategories[0].productCategoryNm;
      this.getItemDetails(this.productCategories[0].productCategoryNm);
    },
    error => {this.alertService.error(error);
              }
    );
  }
  public getItemDetails(category: string) {
    this.selectedCat = category;
    this.buyerService.getItemDetailsByCategory(category).pipe(first()).subscribe(res => {
      this.itemDetails = res.result;
    });
  }

  addToCart(itemId: number) {
    this.itemsCount = this.dataTransferService.getItemsInCart();
    this.itemsCount.next(this.itemsCount.value + 1);
    this.dataTransferService.setItemsInCart(this.itemsCount);
  }
}
