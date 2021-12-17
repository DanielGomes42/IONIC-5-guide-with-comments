import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderGroupExamplePage } from './reorder-group-example.page';

const routes: Routes = [
  {
    path: '',
    component: ReorderGroupExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderGroupExamplePageRoutingModule {}
