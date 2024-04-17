import { Component, OnInit, Input } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import { UserFileService } from 'src/app/services/user-file.service';
import { AudioPlayerComponentComponentService } from "src/app/components/my-component/AudioPlayerComponent/audio-player-component/audio-player-component.component.service"

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

  constructor(private userFileService: UserFileService,private data: AudioPlayerComponentComponentService) { 
  //  this.data.currentMessage.subscribe(message => this.currentSecond = message);
  }

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
      this.wavesurfer.on('timeupdate',(currentTime:number) => {
        this.currentSecond=Math.floor(currentTime);
        //this.changeColor(this.currentSecond)
        //this.data.currentMessage.subscribe(message => this.currentSecond = message)
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


  
 
  /*changeColor(sekundy: number)
  {
    console.log(sekundy)
    this.htmlContent = this.htmlContent.split("<font color=\"red\">").join('');

    this.htmlContent = this.htmlContent.split("</font color=\"red\">").join('');


    let regex = new RegExp("(//.+?//)", "gi");
    this.lines = this.htmlContent


    let testowe = this.htmlContent.split('//');
    let lower = testowe.filter(item => Number(item) <= Number(sekundy) ).filter(Boolean)
    let greater = testowe.filter(item => Number(item) >= Number(sekundy) ).filter(Boolean)
 
    let regex2 = new RegExp("//"+lower.at(-1)+"//")
    console.log(regex2)
    let cos = this.lines.search(regex2)

   console.log(cos)

   this.lines= this.lines.slice(0,cos) + "<font color="red">" + this.lines.slice(cos)

   let cos2 = this.lines.indexOf("//",cos+1);
   cos2 = this.lines.indexOf("//",cos2+5);

   console.log(cos2)
   console.log("lower",lower)
   this.lines= this.lines.slice(0,cos2) + "</font color="red">" + this.lines.slice(cos2)
   console.log(this.lines)
   this.htmlContent=this.lines

  }*/
}
