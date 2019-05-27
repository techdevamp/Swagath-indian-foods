import { AlertModule } from './../alert/alert.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { UploadFileComponent } from 'src/app/_components/upload-file/upload-file.component';
import { DisplayItemDetailsComponent } from 'src/app/_components/display-item-details/display-item-details.component';
import { SidenavListComponent } from 'src/app/_components/sidenav-list/sidenav-list.component';
import { SubscriptionsComponent } from 'src/app/_components/subscriptions/subscriptions.component';
import { ItemDealsLinkComponent } from 'src/app/_components/item-deals-link/item-deals-link.component';
import { ItemDealsLinkDetailComponent } from 'src/app/_components/item-deals-link-detail/item-deals-link-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatListModule, MatToolbarModule, MatInputModule
  , MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatSidenavModule
  , MatIconModule, MatDialogModule, MatMenuModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    UploadFileComponent,
    DisplayItemDetailsComponent,
    SidenavListComponent,
    SubscriptionsComponent,
    ItemDealsLinkComponent,
    ItemDealsLinkDetailComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
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
    AlertModule
  ]
})
export class SellerModule { }
