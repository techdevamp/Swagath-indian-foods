import { ItemDetails } from 'src/app/_models/item.details';
import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperFadeEffectInterface, SwiperCubeEffectInterface } from 'ngx-swiper-wrapper';
import { DataDealCuponService } from 'src/app/_services/data.deal.cupon.service';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit {

itemDetails: ItemDetails[];

constructor(private dataService: DataDealCuponService) {

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
  loop: true,
};



ngOnInit() {
  this.dataService.getItemDetailsByDealTypCd('HOTDEAL').subscribe(res => this.itemDetails = res.result);
  }
}
