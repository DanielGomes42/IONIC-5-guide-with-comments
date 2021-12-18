import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
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


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
