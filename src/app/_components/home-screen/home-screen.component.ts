import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/_services';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit { // , AfterViewInit {

  /*ngAfterViewInit(): void {
    this.router.navigate([{outlets: {homeDetails: ['home-details']}
    }],
      {relativeTo: this.route});
  }*/
  constructor(private router: Router
    , private route: ActivatedRoute
    , private alertService: AlertService) {

  }

  ngOnInit() {
    
  }
  
  subscribeEmail() {
    this.router.navigate(['emailSubscription']);
  }
}
