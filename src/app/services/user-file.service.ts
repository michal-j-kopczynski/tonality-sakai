import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFileService {
  private apiUrl = 'http://127.0.0.1:8000/api/get_user_audio_files/';
  private deleteUrl = 'http://127.0.0.1:8000/api/delete_file/'

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
    return this.http.get(`http://localhost:8000/api/get_audio_file/${filename}`, { responseType: 'blob' });
  }

}
