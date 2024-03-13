// user-file.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFileService {
  constructor() { }

  // Method to fetch file names for the current logged-in user
  getFileList(): Observable<string[]> {
    // For simplicity, always return a static list of file names
    return of(['user1_file1.mp3', 'user1_file2.mp3', 'user1_file3.mp3']);
  }
}