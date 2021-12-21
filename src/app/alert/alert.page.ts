import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
               })
export class AlertPage implements OnInit 
{

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }

async alert(){

  const alert = await this.alertCtrl.create
  ({
    header:"Alert",
    subHeader:"nivel omicron",
    message:"fudeo filhão vai pega fogo",
    buttons: 
    [{
      text: 'Delete',
      role: 'destructive',
      
      handler: () => {
        console.log('Delete clicked');
    }},

      {
      text: 'Share',
      
      handler: () => {
        console.log('Share clicked');}
      }, 
      {
      text: 'Play (open modal)',
    
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorite',
      
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
    
  });
  await alert.present();
}
                   async multiplo(){
  const alert = await this.alertCtrl.create({
    header:"Multiplo",
    subHeader:"nivel omicron",
    message:"fudeo filhão vai pega fogo",
    buttons:["ok","abrir","fechar"] 
  });
  alert.present();
   }
                  async confirma()
    {
const alert = await this.alertCtrl.create({
      header:"Alert", 
      message:"tem certeza que deseja excluir ?",
      buttons:[
        {
         text:'cancel',
         role:'cancel',// A role propriedade de um botão pode ser destructiveou cancel
         cssClass:'secondary',
         handler:(blah)=>{
                 console.log('confirmar o cancelamento');
               }
        },
        {
          text:'ok',
          handler:()=>{ console.log('ok');} //evento do botao
        }
      ]   
    }
  );
    await alert.present();
    }
}
