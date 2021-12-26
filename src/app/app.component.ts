import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
   
    { title: 'Componentes Visuais', url:'componentes-visuais', icon: 'star' },
    { title: 'Componentes Nativos', url:'componentesnativo', icon: 'star' },
  ];
;

}
