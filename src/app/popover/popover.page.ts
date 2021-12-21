import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalInternoComponent } from '../components/modal-interno/modal-interno.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class POPOVERPage implements OnInit {

  constructor(private popoverCrtl: PopoverController) { }

  ngOnInit() {
  }
async abrirpopover(){
  let popover = await this.popoverCrtl.create
  ({
    component: ModalInternoComponent,
    componentProps:{nome:"paulo rogerio"}
   });
  return await popover.present();
}
}
