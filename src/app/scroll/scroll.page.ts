import { Component, ViewChild } from '@angular/core';
import{ IonContent} from '@ionic/angular'
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage  {
  @ViewChild(IonContent,{static:true})
  content:IonContent
dummyList:any
  constructor() {this.dummyList =[
    {value:"daniel"}, {value:"daniel2"},{value:"daniel3"},{value:"daniel4"},{value:"daniel5"},{value:"daniel6"},{value:"daniel2"},{value:"daniel3"},{value:"daniel2"},{value:"daniel3"},{value:"daniel2"},{value:"daniel3"},{value:"daniel2"},{value:"daniel3"},{value:"daniel2"},{value:"daniel3"}, 
   ];
 
  }


ScrollToTop(){
  this.content.scrollToTop(2000);
}

scrollBottom(){
  this.content.scrollToBottom(2000);
}
} 
