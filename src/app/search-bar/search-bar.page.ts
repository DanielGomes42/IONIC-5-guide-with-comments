import { filter } from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {
nome:string="";
pessoa: any;
filtrarpessoa:any;

  constructor() { 
this.pessoa=[
      {id: 1, idade: 13, nome:"Paulo" },
      {id: 2, idade: 17, nome:"Paula" },
      {id: 3, idade: 55, nome:"robervarson" },
      {id: 4, idade: 22, nome:"Giulio" },
      {id: 5, idade: 31, nome:"Pauloroberto" },
      {id: 6, idade: 11, nome:"CR7" },
      {id: 7, idade: 12, nome:"Neymar" },
      {id: 8, idade: 13, nome:"Tesla" },
      {id: 9, idade: 14, nome:"Jonh Snow" },
      ];
      this.filtrarpessoa=this.pessoa
    }

  ngOnInit() {
  }
 filtraritens(event){
   this.nome = event.target.value.toLowerCase();//assim que solta o botão
   
this.filtrarpessoa=this.pessoasfiltradas(this.nome);
 }
 pessoasfiltradas(nome) {
   this.filtrarpessoa=this.pessoa;

    return  this.filtrarpessoa.filter((item) => {
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });

 }
 }

