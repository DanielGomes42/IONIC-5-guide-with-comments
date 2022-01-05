import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoicePageRoutingModule } from './voice-routing.module';

import { VoicePage } from './voice.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoicePageRoutingModule
  ],
  declarations: [VoicePage],
  providers:[TextToSpeech]
})
export class VoicePageModule {}
