import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player-component.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    AudioPlayerComponent
  
  ],
  imports: [
    ButtonModule,
    RippleModule,
    CommonModule,
  ],
  exports: [
    AudioPlayerComponent
  ]
})
export class AudioModule { }
