import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { COMPONENTESNATIVOPage } from './componentesnativo.page';

const routes: Routes = [
  {
    path: '',
    component: COMPONENTESNATIVOPage
  },
  {
    path: 'voz',
    loadChildren: () => import('./voz/voz.module').then( m => m.VozPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class COMPONENTESNATIVOPageRoutingModule {}
