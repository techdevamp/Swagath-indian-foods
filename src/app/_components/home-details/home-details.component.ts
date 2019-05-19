import { DataTransferService } from './../../_services/data-transfer.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemDetails } from 'src/app/_models/item.details';
import { DataService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { ProductCategory } from 'src/app/_models/product.category';
import { OutletContext } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit {

  constructor(private dataService: DataService, private dataTransferService: DataTransferService) {
   }
  itemDetails: ItemDetails[];
  productCategories: ProductCategory[];

  itemsCount: BehaviorSubject<number>;

  ngOnInit() {
    this.getProductCategories();
  }
  public getProductCategories() {
    this.dataService.getProductCategories().pipe(first()).subscribe(res => {
      this.productCategories = res.result;
      this.getItemDetails(this.productCategories[0].productCategoryNm);
    });
  }
  public getItemDetails(category: string) {
    this.dataService.getItemDetails(category).pipe(first()).subscribe(res => {
      this.itemDetails = res.result;
    });
  }

  addToCart(itemId: number) {
    this.itemsCount = this.dataTransferService.getItemsInCart();
    this.itemsCount.next(this.itemsCount.value + 1);
    this.dataTransferService.setItemsInCart(this.itemsCount);
  }
}
