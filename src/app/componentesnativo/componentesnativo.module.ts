import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { COMPONENTESNATIVOPageRoutingModule } from './componentesnativo-routing.module';

import { COMPONENTESNATIVOPage } from './componentesnativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    COMPONENTESNATIVOPageRoutingModule
  ],
  declarations: [COMPONENTESNATIVOPage]
})
export class COMPONENTESNATIVOPageModule {}
