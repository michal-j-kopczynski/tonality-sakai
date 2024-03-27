import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {
  private apiUrl = 'http://127.0.0.1:8000/api/generate_transcription/';

  constructor(private http: HttpClient) {}

  generateTranscription(filename: string, trans_filename: string): Observable<any> {
    // Get token from localStorage
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No authentication token available.');
    }

    // Include token in request headers
    const headers = new HttpHeaders({
      Authorization: `token ${authToken}`
    });

    // Define the request body
    const requestBody = { filename, trans_filename };

    // Make POST request to the Django API
    return this.http.post(this.apiUrl, requestBody, { headers });
  }
}
