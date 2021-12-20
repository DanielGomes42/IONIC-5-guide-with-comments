import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'; // importei  uma função angular

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl :ToastController) { } // importei uma função angular (toastCtrl é o nome da classe)



  ngOnInit() {}
   async TOAST() //async =assincrono 
  {             //o await e prescisa colocar pelo assincrono  (estou colocando a toastCtrl dendo da TOAST)
       let toast = await this.toastCtrl.create
       ({  
         message:"brilha filhão",
         duration: 2000
       });
       toast.present(); // imprime a menssagem 
  }

  async TOAST2() //async =assincrono 
  {             //o await e prescisa colocar pelo assincrono  (estou colocando a toastCtrl dendo da TOAST)
       const TOAST2 = await this.toastCtrl.create
       ({  
        header: 'Toast header',
      message: 'Click to Close',
      position: 'bottom',
      mode:"md",
      
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
       });
       TOAST2.present(); // imprime a menssagem 
  }
}

  

