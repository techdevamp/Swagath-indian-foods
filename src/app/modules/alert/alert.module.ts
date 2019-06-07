import { AlertComponent } from 'src/app/components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertRoutingModule } from './alert-routing.module';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    AlertRoutingModule
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
