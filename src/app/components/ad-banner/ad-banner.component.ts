import { ImageUpload } from './../../models/image.upload';
import { AppConstants } from 'src/app/constants/AppConstants';
import { AlertService } from 'src/app/services';
import { BuyerService } from './../../services/buyer.service';
import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent  implements OnInit {

adBanners: ImageUpload[];
imgUrl = AppConstants.imageURL;

constructor(private buyerService: BuyerService
          , private alertService: AlertService ) {

}

    config: SwiperConfigInterface  = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    autoplay: true,
    controller: true,
    speed: 500,
    loop: true
  };

  ngOnInit(): void {
    this.buyerService.getImageByImageType('AdBanner').subscribe(res => this.adBanners = res.result,
      error => this.alertService.error(error));
  }

}
