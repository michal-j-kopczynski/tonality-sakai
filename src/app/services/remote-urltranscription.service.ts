import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteURLTranscriptionService {

  private apiUrl = 'http://127.0.0.1:8000/api/generate_transcription_remote_url/';

  constructor(private http: HttpClient) {}

  generateRemoteTranscription(remoteurl: string, trans_name: string, language: string): Observable<any> {
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
    const requestBody = { remoteurl, trans_name, language };

    // Make POST request to the Django API
    return this.http.post(this.apiUrl, requestBody, { headers });
  }
}
