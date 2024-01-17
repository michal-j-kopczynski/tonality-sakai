// log.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private logCount: number = 0;

  logToConsole(message: string): void {
    this.logCount++;
    console.log(`[${this.logCount}] ${message}`);
  }
}
