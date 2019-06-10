import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface} from 'ngx-swiper-wrapper';
import { ItemDetails } from 'src/app/models/item.details';
import { DataDealCouponService } from 'src/app/services/data.deal.coupon.service';
import { AlertService, DataTransferService } from 'src/app/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.scss'],
})
export class HotDealsComponent implements OnInit {

  hotDealsItems: ItemDetails[];
  itemsCount: BehaviorSubject<number>;
  itemsAvailable: boolean;
  imgUrl = '../../../assets/images/';

  constructor(private dataService: DataDealCouponService
          ,   private alertService: AlertService
          ,   private dataTransferService: DataTransferService) {

}

public config: SwiperConfigInterface  = {
  a11y: true,
  direction: 'horizontal',
  slidesPerView: 3,
  keyboard: true,
  mousewheel: false,
  scrollbar: false,
  navigation: true,
  pagination: true,
  autoplay: false,
  controller: true,
  speed: 500,
  loop: true
};

  ngOnInit() {
    this.getItemsByDeals();
  }

  getItemsByDeals() {
    this.dataService.getItemDetailsByDealTypCd('HOTDEAL')
    .subscribe(
          res => {this.hotDealsItems = res.result;
                  if (this.hotDealsItems.length > 0) {
                    this.itemsAvailable = true;
                  } else {
                    this.itemsAvailable = false;
                  }
                }
        , error => this.alertService.error(error)
        );
  }
  addToCart(itemId: number) {
    this.itemsCount = this.dataTransferService.getItemsInCart();
    this.itemsCount.next(this.itemsCount.value + 1);
    this.dataTransferService.setItemsInCart(this.itemsCount);
  }
}
