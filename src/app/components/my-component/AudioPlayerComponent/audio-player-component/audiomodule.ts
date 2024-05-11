import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player-component.component';


@NgModule({
  declarations: [
    AudioPlayerComponent
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AudioPlayerComponent
  ]
})
export class AudioModule { }
