import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemoteURLTranscriptionService {

  private apiUrl = `https://${environment.urls.backendURL}/api/generate_transcription_remote_url/`;
  private remotetranscriptionListUrl = `https://${environment.urls.backendURL}/api/get_user_remote_transcriptions/`;
  private deleteUrl = `https://${environment.urls.backendURL}/api/delete_remote_transcription/`
  private regenerateapiUrl = `https://${environment.urls.backendURL}/api/regenerate_remote_transcription_remote_url/`;
  private regenerateNotesRemoteapiUrl = `https://${environment.urls.backendURL}/api/regenerate_remote_notes_remote_url/`;
  private save_edit_url = `https://${environment.urls.backendURL}/api/save_edited_transcript_remote/`;
  private questionAPI = `https://${environment.urls.backendURL}/api/ask_question/`;

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

  getRemoteTranscriptionList(): Observable<string[]> {
    // Get token from localStorage
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No authentication token available.');
    }

    // Include token in request headers
    const headers = { Authorization: `Token ${authToken}` };

    // Make HTTP GET request to fetch file names
    return this.http.get<string[]>(this.remotetranscriptionListUrl, { headers });
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

  regenerate_summary_remote(remoteurl: string, trans_name: string): Observable<any> {
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
    const requestBody = { remoteurl, trans_name };

    // Make POST request to the Django API
    return this.http.post(this.regenerateapiUrl, requestBody, { headers });
  }

  regenerate_notes_remote(remoteurl: string, trans_name: string): Observable<any> {
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
    const requestBody = { remoteurl, trans_name };

    // Make POST request to the Django API
    return this.http.post(this.regenerateNotesRemoteapiUrl, requestBody, { headers });
  }

  save_edited_transcript_remote(trans_name: string, uploaded_at: string, edited_transcript: string): Observable<any> {
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
    const requestBody = { trans_name, uploaded_at, edited_transcript };

    // Make POST request to the Django API
    return this.http.post(this.save_edit_url, requestBody, { headers });
  }

  ask_question(trans_name: string, uploaded_at: string, question: string): Observable<any> {
    // Get token from localStorage
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No authentication token available.');
    }

    // Include token in request headers
    const headers = new HttpHeaders({
      Authorization: `token ${authToken}`
    });

    let type_data: String = "remotelist";
    // Define the request body
    const requestBody = { trans_name, uploaded_at, question, type_data };

    // Make POST request to the Django API
    return this.http.post(this.questionAPI, requestBody, { headers });
  }

}
