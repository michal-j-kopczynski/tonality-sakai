import { Component, OnInit, Input } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import { UserFileService } from 'src/app/services/user-file.service';
import { environment } from 'src/environments/environment';
import { AudioService  } from "src/app/components/my-component/AudioPlayerComponent/audio-player-component/audio.service"

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player-component.component.html',
})
export class AudioPlayerComponent implements OnInit {
  wavesurfer: WaveSurfer;
  @Input() audioUrl: string; // Input property to receive the audio URL
  currentSecond:number=0
  seconds=0
  lines:any = "";
  constructor(private userFileService: UserFileService,private data: AudioService ) { }

  ngOnInit(): void {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple',
      //width: 500
    });
  }

  
  playAudio(url: string): void {
    if (!this.wavesurfer.isPlaying()) {
      // If it's playing, stop it first
      this.wavesurfer.load(url);

    }

    
    this.wavesurfer.play();
   
   
  }

  playAudioBlob(filename: string): void {
    if (!this.wavesurfer.isPlaying()) {
      // If it's playing, stop it first
      this.userFileService.getAudioFile(filename).subscribe(blob => {
        this.wavesurfer.loadBlob(blob);
        this.wavesurfer.play();
      });
      this.wavesurfer.on('timeupdate',(currentTime:number) => {
        this.currentSecond=Math.floor(currentTime);
        this.data.changeSecond(this.currentSecond)
     
      });
    }

  }

  pauseAudio(): void {
    
      this.wavesurfer.playPause();
    
    
  }

  stopAudio(): void {
    this.wavesurfer.stop();
  }

  setPlaybackRate(rate: number): void {
    this.wavesurfer.setPlaybackRate(rate);
  }
}
