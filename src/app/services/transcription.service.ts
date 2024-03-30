import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {
  private apiUrl = 'http://127.0.0.1:8000/api/generate_transcription/';
  private transcriptionListUrl = 'http://127.0.0.1:8000/api/get_user_transcriptions/';
  private deleteUrl = 'http://127.0.0.1:8000/api/delete_transcription/'

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

  getTranscriptionList(): Observable<string[]> {
    // Get token from localStorage
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No authentication token available.');
    }

    // Include token in request headers
    const headers = { Authorization: `Token ${authToken}` };

    // Make HTTP GET request to fetch file names
    return this.http.get<string[]>(this.transcriptionListUrl, { headers });
  }

  deleteTranscriptionByName(trans_name: string, uploaded_at: string): Observable<any> {
    // Get token from localStorage
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No authentication token available.');
    }
  
    // Include token in request headers
    const headers = { Authorization: `Token ${authToken}` };
    // Construct the URL with the filename as a query parameter
    const url = `${this.deleteUrl}?trans_name=${encodeURIComponent(trans_name)}&date_of_creation=${encodeURIComponent(uploaded_at)}`;
  
    // Make HTTP DELETE request to delete the file
    return this.http.delete(url, { headers });
  }

}
