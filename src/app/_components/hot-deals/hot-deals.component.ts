import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperFadeEffectInterface, SwiperCubeEffectInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.scss'],
})
export class HotDealsComponent implements OnInit {


constructor() {

}
public effect: SwiperFadeEffectInterface = {
  crossFade: true
};

public config: SwiperConfigInterface  = {
  a11y: true,
  direction: 'horizontal',
  slidesPerView: 1,
  keyboard: true,
  mousewheel: true,
  scrollbar: false,
  navigation: true,
  pagination: true,
  autoplay: true,
  controller: true,
  speed: 500,
  loop: true,
  fadeEffect: this.effect
};



ngOnInit() {

  }
}
