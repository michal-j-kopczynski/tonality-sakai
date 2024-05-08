import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserFileService {
  private apiUrl = `http://${environment.urls.backendURL}/api/get_user_audio_files/`;
  private deleteUrl = `http://${environment.urls.backendURL}/api/delete_file/`

  constructor(private http: HttpClient) { 
    if (environment.production) {
      console.log('Running in production mode');
    } else {
      console.log('Running in development mode');
    }
  }

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

  deleteFileByName(filename: string): Observable<any> {
    // Get token from localStorage
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No authentication token available.');
    }
  
    // Include token in request headers
    const headers = { Authorization: `Token ${authToken}` };
    const hardcodedFilename = 'testing_filename'; // Hardcoded filename
    // Construct the URL with the filename as a query parameter
    const url = `${this.deleteUrl}?filename=${encodeURIComponent(filename)}`;
  
    // Make HTTP DELETE request to delete the file
    return this.http.delete(url, { headers });
  }

  getAudioFile(filename: string) {
    return this.http.get(`http://${environment.urls.backendURL}/api/get_audio_file/${filename}`, { responseType: 'blob' });
  }

}
