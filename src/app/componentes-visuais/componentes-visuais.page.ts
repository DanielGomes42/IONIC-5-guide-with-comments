import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-visuais',
  templateUrl: './componentes-visuais.page.html',
  styleUrls: ['./componentes-visuais.page.scss'],
})
export class ComponentesVisuaisPage implements OnInit {

  componentes: any[]=[]; // ela é do tipo any e recebe um array
  constructor(private navCtrl : NavController) {  // dentro do contrutor se constroi o´que a constante  vai receber/fazer

this.componentes = [ 
  { title: 'BOTÃO INICIAL', url: 'botoes', icon: 'mail' },
  { title: 'Navegação', url: 'botao2', icon: 'paper-plane' },
  { title: 'Alerta', url: 'alert', icon: 'heart' },
  { title: 'Action-Sheet', url: 'action-sheet', icon: 'archive' },
  { title: 'BADGE', url:  'badge', icon: 'trash' },
  { title: 'Chceck Box', url: 'chekbox', icon: 'warning'},
  { title: 'cards', url: 'cards', icon: 'warning' },
  { title: 'CHIPS', url: 'chip', icon: 'warning' },
  { title: 'Scroll', url: 'scroll', icon: 'warning' },
  { title: 'Datatime', url: 'datatime', icon: 'accessibility' },
  { title: 'FAB', url: 'fabe', icon: 'warning' },
  { title: 'grid', url: 'grid', icon: 'warning' },
  { title: 'input', url: 'input', icon: 'warning' },
  { title: 'Scroll Infinito', url: 'infinitscroll', icon: 'warning' },
  { title: 'List', url: 'list', icon: 'list' },
  { title: 'PROGRESS-BAR', url: 'progress-bar', icon: 'code'},
  { title: 'Refresher', url: 'reffreshe', icon: 'warning' },
  { title: 'reorder', url: 'reorder', icon: 'star' },
  { title: 'select', url: 'select', icon: 'clipboard' },
  { title: 'toggle', url: 'toggle', icon: 'gift' },
  { title: 'search-bar', url: 'search-bar', icon: 'golf' },
  { title: 'segment', url:'segment', icon: 'golf' },
  { title: 'slide', url:'slide', icon: 'golf' },
  { title: 'Toast', url:'toast', icon: 'star' },
  { title: 'Modal', url:'modal', icon: 'star' },
  { title: 'POPOPER', url:'popover', icon: 'star' },
  { title: 'RADIO', url:'radio', icon: 'star' },
];}
  ngOnInit() {
  }
  showpage(url:string){
this.navCtrl.navigateForward(url);
}
}
