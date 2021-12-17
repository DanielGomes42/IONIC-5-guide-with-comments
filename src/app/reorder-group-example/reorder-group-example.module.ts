import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReorderGroupExamplePageRoutingModule } from './reorder-group-example-routing.module';

import { ReorderGroupExamplePage } from './reorder-group-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderGroupExamplePageRoutingModule
  ],
  declarations: [ReorderGroupExamplePage]
})
export class ReorderGroupExamplePageModule {}
