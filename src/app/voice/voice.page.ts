import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-voice',
  templateUrl: './voice.page.html',
  styleUrls: ['./voice.page.scss'],
})
export class VoicePage implements OnInit {

testofalado:string="vai estudar dona lazara";
  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }
falar(){
  this.tts.speak({
    text:this.testofalado,
    locale:'pt-BR',
    rate:0.75,
  })
  .then(() => console.log('vai estudar dona lazara'))
  .catch((reason: any) => console.log(reason));
}
}
