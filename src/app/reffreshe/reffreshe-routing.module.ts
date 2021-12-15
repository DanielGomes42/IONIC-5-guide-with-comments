import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReffreshePage } from './reffreshe.page';

const routes: Routes = [
  {
    path: '',
    component: ReffreshePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReffreshePageRoutingModule {}
