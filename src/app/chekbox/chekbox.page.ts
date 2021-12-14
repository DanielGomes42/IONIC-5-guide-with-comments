import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chekbox',
  templateUrl: './chekbox.page.html',
  styleUrls: ['./chekbox.page.scss'],
})
export class ChekboxPage implements OnInit {

  meses: any[]  =[
    {nomedoMes:"janeiro", valor:1 , marcado:false},
    {nomedoMes:"feveriro", valor:2 ,marcado:true},
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.meses)
  }
  exibirMeses(){
    console.log(this.meses)
  }

}
