import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'select',
    redirectTo: 'select',
    pathMatch: 'full'
  },
  
  {
    path: 'botoes',
    loadChildren: () => import('./botoes/botoes.module').then( m => m.BotoesPageModule)
  },
  {
    path: 'botao2',
    loadChildren: () => import('./botao2/botao2.module').then( m => m.Botao2PageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'chekbox',
    loadChildren: () => import('./chekbox/chekbox.module').then( m => m.ChekboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'scroll',
    loadChildren: () => import('./scroll/scroll.module').then( m => m.ScrollPageModule)
  },
  {
    path: 'datatime',
    loadChildren: () => import('./datatime/datatime.module').then( m => m.DatatimePageModule)
  },
  {
    path: 'fabe',
    loadChildren: () => import('./fabe/fabe.module').then( m => m.FABEPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'infinitscroll',
    loadChildren: () => import('./infinitscroll/infinitscroll.module').then( m => m.InfinitscrollPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  {
    path: 'reffreshe',
    loadChildren: () => import('./reffreshe/reffreshe.module').then( m => m.ReffreshePageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  },  {
    path: 'toggle',
    loadChildren: () => import('./toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'search-bar',
    loadChildren: () => import('./search-bar/search-bar.module').then( m => m.SearchBarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },


 
  

  

 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
