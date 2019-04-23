import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './_components/user-details/user-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterUserComponent } from './_components/register-user/register-user.component';
import { HomeScreenComponent } from './_components/home-screen/home-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatListModule, MatToolbarModule
  , MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatSidenavModule, MatIconModule, MatMenuModule,
  MatDialogModule, MatCheckboxModule} from '@angular/material';
import { LoginComponent } from './_components/login/login.component';
import { AlertComponent } from './_components/alert.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { ListUserComponent } from './_components/list-user/list-user.component';
import { EditUserComponent } from './_components/edit-user/edit-user.component';
import { UploadFileComponent } from './_components/upload-file/upload-file.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisplayItemDetailsComponent } from './_components/display-item-details/display-item-details.component';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from './_components/sidenav-list/sidenav-list.component';
import { SubscriptionsComponent } from './_components/subscriptions/subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    RegisterUserComponent,
    HomeScreenComponent,
    LoginComponent,
    AlertComponent,
    ListUserComponent,
    EditUserComponent,
    UploadFileComponent,
    DisplayItemDetailsComponent,
    SidenavListComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
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
    MatCheckboxModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
