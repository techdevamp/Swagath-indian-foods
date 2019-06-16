import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterUserComponent } from 'src/app/components/register-user/register-user.component';
import { ListUserComponent } from 'src/app/components/list-user/list-user.component';
import { EditUserComponent } from 'src/app/components/edit-user/edit-user.component';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatListModule, MatToolbarModule, MatInputModule
  , MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatSidenavModule
  , MatIconModule, MatDialogModule, MatMenuModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { AlertModule } from '../alert/alert.module';

@NgModule({
  declarations: [
    RegisterUserComponent,
    ListUserComponent,
    EditUserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
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
    NgbModule,
    SwiperModule,
    NgMatSearchBarModule,
    AlertModule
  ]
})
export class AuthenticationModule { }
