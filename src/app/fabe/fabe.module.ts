import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FABEPageRoutingModule } from './fabe-routing.module';

import { FABEPage } from './fabe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FABEPageRoutingModule
  ],
  declarations: [FABEPage]
})
export class FABEPageModule {}
