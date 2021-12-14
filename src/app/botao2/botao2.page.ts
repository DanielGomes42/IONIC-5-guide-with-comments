import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-botao2',
  templateUrl: './botao2.page.html',
  styleUrls: ['./botao2.page.scss'],
})
export class Botao2Page implements OnInit {

  constructor(private navCtrl: NavController) 
  { }

  ngOnInit() {// começa a navegação
  }
  botao1()
  {
this.navCtrl.navigateForward('botoes');
  }


}