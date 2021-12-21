import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { POPOVERPageRoutingModule } from './popover-routing.module';

import { POPOVERPage } from './popover.page';
import { ModalInternoComponent } from '../components/modal-interno/modal-interno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    POPOVERPageRoutingModule
  ],
  declarations: [POPOVERPage,ModalInternoComponent],

})
export class POPOVERPageModule {}
