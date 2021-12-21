import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { POPOVERPage } from './popover.page';

const routes: Routes = [
  {
    path: '',
    component: POPOVERPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class POPOVERPageRoutingModule {}
