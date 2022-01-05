import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentesnativo',
  templateUrl: './componentesnativo.page.html',
  styleUrls: ['./componentesnativo.page.scss'],
})
export class COMPONENTESNATIVOPage implements OnInit {

  constructor(private navCtrl : NavController)   // dentro do contrutor se constroi o´que a constante  vai receber/fazer
{}
   
      ngOnInit() {
      }
      
      irparacamera(){
        this.navCtrl.navigateForward('camera');
          }

  irparavoz(){
            this.navCtrl.navigateForward('voice')
          }
        }
    
    