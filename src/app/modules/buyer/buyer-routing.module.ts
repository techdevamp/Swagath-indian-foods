import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from 'src/app/components/home-screen/home-screen.component';

const routes: Routes = [{
  path: 'home',
  component: HomeScreenComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
