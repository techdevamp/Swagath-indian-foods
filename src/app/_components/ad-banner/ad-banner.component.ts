import { ItemDetails } from 'src/app/_models/item.details';
import { DataService } from 'src/app/_services/data.service';
import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperFadeEffectInterface, SwiperCubeEffectInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit {

itemDetails: ItemDetails[];

constructor(private dataService: DataService) {

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
  this.dataService.getItemDetails('Grains').subscribe(res => this.itemDetails = res.result);
  }
}
