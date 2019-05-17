import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperFadeEffectInterface, SwiperCubeEffectInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit {


constructor() {

}
public effect: SwiperFadeEffectInterface = {
  crossFade: true
};

public config: SwiperConfigInterface  = {
  a11y: true,
  direction: 'horizontal',
  slidesPerView: 3,
  keyboard: true,
  mousewheel: true,
  scrollbar: false,
  navigation: true,
  pagination: true,
  autoplay: false,
  controller: true,
  speed: 500,
  loop: true,
  fadeEffect: this.effect
};



ngOnInit() {

  }
}
