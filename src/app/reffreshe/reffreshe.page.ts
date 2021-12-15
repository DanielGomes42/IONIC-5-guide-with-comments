import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reffreshe',
  templateUrl: './reffreshe.page.html',
  styleUrls: ['./reffreshe.page.scss'],
})
export class ReffreshePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
atualizar(event){
  
  console.log("usario solicitou atualização")

setTimeout(() => {
  console.log('lista atualizada com sucesso');

}, 2000);
}

}
