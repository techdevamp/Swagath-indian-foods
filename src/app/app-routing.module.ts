import { AuthenticationModule } from './modules/authentication/authentication.module';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards';
import { BuyerModule } from './modules/buyer/buyer.module';
import { SellerModule } from './modules/seller/seller.module';

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
    path: 'buyer',
    loadChildren: () => BuyerModule
  },
  {
    path: 'seller',
    loadChildren: () => SellerModule
  },
  {
    path: 'admin',
    loadChildren: () => AuthenticationModule
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
