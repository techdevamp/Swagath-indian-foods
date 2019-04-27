import { Component, OnInit } from '@angular/core';
import { ItemDetails } from 'src/app/_models/item.details';
import { DataService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { ProductCategory } from 'src/app/_models/product.category';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  itemDetails: ItemDetails[];
  productCategories: ProductCategory[];

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
}
