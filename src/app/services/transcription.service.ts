import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {
  private apiUrl = `http://${environment.urls.backendURL}/api/generate_transcription/`;
  private transcriptionListUrl = `http://${environment.urls.backendURL}/api/get_user_transcriptions/`;
  private deleteUrl = `http://${environment.urls.backendURL}/api/delete_transcription/`
  private regenerateapiUrl = `http://${environment.urls.backendURL}/api/regenerate_transcription/`;
  private save_edit_url = `http://${environment.urls.backendURL}/api/save_edited_transcript/`;
  private regenerateNotesapiUrl = `http://${environment.urls.backendURL}/api/regenerate_notes/`;

  constructor(private http: HttpClient) {}

  generateTranscription(filename: string, trans_filename: string, language: string): Observable<any> {
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
    const requestBody = { filename, trans_filename, language };

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

  regenerate_summary(trans_filename: string, uploaded_at: string): Observable<any> {
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
    const requestBody = { trans_filename, uploaded_at };

    // Make POST request to the Django API
    return this.http.post(this.regenerateapiUrl, requestBody, { headers });
  }

  save_edited_transcript(trans_filename: string, uploaded_at: string, edited_transcript: string): Observable<any> {
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
    const requestBody = { trans_filename, uploaded_at, edited_transcript };

    // Make POST request to the Django API
    return this.http.post(this.save_edit_url, requestBody, { headers });
  }

  regenerate_notes(trans_filename: string, uploaded_at: string): Observable<any> {
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
    const requestBody = { trans_filename, uploaded_at };

    // Make POST request to the Django API
    return this.http.post(this.regenerateNotesapiUrl, requestBody, { headers });
  }
  

}
