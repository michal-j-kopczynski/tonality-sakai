import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFileService {
  private apiUrl = 'http://127.0.0.1:8000/api/get_user_audio_files/';

  constructor(private http: HttpClient) { }

  // Method to fetch file names for the current logged-in user
  getFileList(): Observable<string[]> {
    // Get token from localStorage
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No authentication token available.');
    }

    // Include token in request headers
    const headers = { Authorization: `Token ${authToken}` };

    // Make HTTP GET request to fetch file names
    return this.http.get<string[]>(this.apiUrl, { headers });
  }
}
