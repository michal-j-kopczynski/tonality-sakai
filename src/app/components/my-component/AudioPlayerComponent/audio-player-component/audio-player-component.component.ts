import { Component, OnInit, Input } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import { UserFileService } from 'src/app/services/user-file.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player-component.component.html',
})
export class AudioPlayerComponent implements OnInit {
  wavesurfer: WaveSurfer;
  @Input() audioUrl: string; // Input property to receive the audio URL

  constructor(private userFileService: UserFileService) { }

  ngOnInit(): void {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple',
      width: 500
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
