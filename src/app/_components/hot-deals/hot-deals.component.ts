import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface} from 'ngx-swiper-wrapper';
import { ItemDetails } from 'src/app/_models/item.details';
import { DataDealCouponService } from 'src/app/_services/data.deal.coupon.service';

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.scss'],
})
export class HotDealsComponent implements OnInit {
itemDetails: ItemDetails[];

constructor(private dataService: DataDealCouponService) {

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
  this.dataService.getItemDetailsByDealTypCd('HOTDEAL').subscribe(res => this.itemDetails = res.result);
  }
}
