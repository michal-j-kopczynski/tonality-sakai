import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerComponentComponentService {

  seconds:number=0
  private messageSource = new BehaviorSubject(this.seconds);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeSecond(message:number)
  {
    this.seconds=message
    this.messageSource.next(message)
  //  console.log(message)
  }

}