import { EditUserComponent } from './_components/edit-user/edit-user.component';
import { LoginComponent } from './_components/login/login.component';
import { HomeScreenComponent } from './_components/home-screen/home-screen.component';
import { RegisterUserComponent } from './_components/register-user/register-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';
import { UserDetailsComponent } from './_components/user-details/user-details.component';
import { ListUserComponent } from './_components/list-user/list-user.component';
import { UploadFileComponent } from './_components/upload-file/upload-file.component';
import { DisplayItemDetailsComponent } from './_components/display-item-details/display-item-details.component';
import { SidenavListComponent } from './_components/sidenav-list/sidenav-list.component';
import { SubscriptionsComponent } from './_components/subscriptions/subscriptions.component';
import { HomeDetailsComponent } from './_components/home-details/home-details.component';

const routes: Routes =
[
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeScreenComponent,
    children: [{
      path: 'home-details',
      outlet: 'homeDetails',
      component: HomeDetailsComponent
    }]
  },
  {
    path: 'register',
    component:  RegisterUserComponent
  },
  {
    path: 'list-user',
    component: ListUserComponent
  },
  {
    path: 'edit-user',
    component: EditUserComponent
  },
  {
    path: 'add-userDetails',
    component: UserDetailsComponent
  },
  {
    path: 'side-nav-list',
    component: SidenavListComponent,
    children: [{
      path: 'upload-file/:id',
      outlet: 'sidemenu',
      component: UploadFileComponent
    },
    {
      path: 'display-item-details/:id',
      outlet: 'sidemenu',
      component: DisplayItemDetailsComponent
    },
    {
      path: 'subscriptions/:id',
      outlet: 'sidemenu',
      component: SubscriptionsComponent
    }]
  },
// otherwise redirect to home
  {
    path: '**',
    redirectTo: '/login'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
