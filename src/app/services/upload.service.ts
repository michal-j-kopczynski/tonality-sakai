// upload.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = 'http://127.0.0.1:8000/api/upload/';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('audio_file', file);

    // Get token from localStorage
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      throw new Error('No authentication token available.');
    }

    // Include token in request headers
    const headers = new HttpHeaders({
      Authorization: `token ${authToken}`
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
