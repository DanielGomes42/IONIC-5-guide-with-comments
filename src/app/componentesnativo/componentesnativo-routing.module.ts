import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { COMPONENTESNATIVOPage } from './componentesnativo.page';

const routes: Routes = [
  {
    path: '',
    component: COMPONENTESNATIVOPage
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class COMPONENTESNATIVOPageRoutingModule {}
