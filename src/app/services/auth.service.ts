// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private apiUrl = 'http://127.0.0.1:8000';
  private apiUrl = 'http://3.123.146.102';
  private token: string | null = localStorage.getItem('authToken');

  constructor(private http: HttpClient) {}


  signup(username: string, password: string, email: string): Observable<any> {
    const body = { username, password, email };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.apiUrl}/signup`, body, { headers });
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.apiUrl}/login`, body, { headers }).pipe(
      tap((response: any) => {
        this.token = response.token;
        // You can store the token in localStorage for persistence
        localStorage.setItem('authToken', this.token);
      }),
      
    );
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    // Check if the token is present and not expired (additional logic needed for token expiration)
    return !!this.token;
  }

  
  
  testToken(): Observable<any> {
    if (!this.token) {
      // If token is not present, handle as needed (throw an error or handle appropriately)
      return throwError('No token available.');
    }
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `token ${this.token}`,
    });
  
    return this.http.get(`${this.apiUrl}/test_token`, { headers });
  }
}
