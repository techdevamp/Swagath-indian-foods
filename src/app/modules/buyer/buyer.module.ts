import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { HomeScreenComponent } from 'src/app/components/home-screen/home-screen.component';
import { HomeDetailsComponent } from 'src/app/components/home-details/home-details.component';
import { AdBannerComponent } from 'src/app/components/ad-banner/ad-banner.component';
import { HotDealsComponent } from 'src/app/components/hot-deals/hot-deals.component';
import { EmailSubscriptionComponent } from 'src/app/components/email-subscription/email-subscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatListModule, MatToolbarModule, MatInputModule
  , MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule
  , MatSidenavModule, MatIconModule, MatDialogModule, MatMenuModule, MatCheckboxModule
  , MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { AlertModule } from '../alert/alert.module';
import { SearchComponent } from 'src/app/components/search/search.component';

@NgModule({
  declarations: [
    HomeScreenComponent,
    HomeDetailsComponent,
    AdBannerComponent,
    HotDealsComponent,
    EmailSubscriptionComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatGridListModule,
    SwiperModule,
    NgMatSearchBarModule,
    AlertModule
  ]
})
export class BuyerModule { }
