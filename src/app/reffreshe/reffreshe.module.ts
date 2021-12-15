import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReffreshePageRoutingModule } from './reffreshe-routing.module';

import { ReffreshePage } from './reffreshe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReffreshePageRoutingModule
  ],
  declarations: [ReffreshePage]
})
export class ReffreshePageModule {}
