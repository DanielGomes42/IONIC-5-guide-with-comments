import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalInternoComponent } from '../components/modal-interno/modal-interno.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }
async abrirmodal(){
  let modal = await this.modalCrtl.create
  ({
    component: ModalInternoComponent,
    componentProps:{nome:"paulo rogerio"}
   });
  return await modal.present();
}
}
