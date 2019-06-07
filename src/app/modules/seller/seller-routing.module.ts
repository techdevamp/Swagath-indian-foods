import { EditItemDetailsComponent } from './../../components/edit-item-details/edit-item-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavListComponent } from 'src/app/components/sidenav-list/sidenav-list.component';
import { UploadFileComponent } from 'src/app/components/upload-file/upload-file.component';
import { DisplayItemDetailsComponent } from 'src/app/components/display-item-details/display-item-details.component';
import { SubscriptionsComponent } from 'src/app/components/subscriptions/subscriptions.component';
import { ItemDealsLinkComponent } from 'src/app/components/item-deals-link/item-deals-link.component';
import { ItemDealsLinkDetailComponent } from 'src/app/components/item-deals-link-detail/item-deals-link-detail.component';

const routes: Routes = [
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
      path: 'edit-item-details',
      outlet: 'sidemenu',
      component: EditItemDetailsComponent
    },
    {
      path: 'subscriptions/:id',
      outlet: 'sidemenu',
      component: SubscriptionsComponent
    },
    {
      path: 'item-link-deals/:id',
      outlet: 'sidemenu',
      component: ItemDealsLinkComponent
    },
    {
      path: 'item-deals-link-detail',
      outlet: 'sidemenu',
      component: ItemDealsLinkDetailComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
