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
  keyboard: false,
  mousewheel: false,
  scrollbar: false,
  navigation: false,
  pagination: true,
  autoplay: true,
  controller: false,
  speed: 500,
  loop: true,
  fadeEffect: this.effect
};



ngOnInit() {

  }
}
