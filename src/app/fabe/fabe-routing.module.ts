import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FABEPage } from './fabe.page';

const routes: Routes = [
  {
    path: '',
    component: FABEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FABEPageRoutingModule {}
