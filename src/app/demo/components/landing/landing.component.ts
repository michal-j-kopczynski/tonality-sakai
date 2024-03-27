import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LogService } from 'src/app/services/log.service';

import { AuthService } from 'src/app/services/auth.service';

import { UploadService } from 'src/app/services/upload.service';

import { TranscriptionService } from 'src/app/services/transcription.service';

@Component({
    selector: 'app-landing',
    template: `
    <div>
      <h2>My Component</h2>
      <button (click)="signup()">Signup</button>
      <button (click)="login()">Login</button>
      <button (click)="testToken()">Test Token</button>
      <button (click)="testTranscription()">Test Transcription</button>
      <div>
      <h2>My Component - further testing</h2>
      <button (click)="executeIfLoggedIn()">Execute If Logged In</button>
      <button (click)="logout()">Logout</button>
    </div>


    <!-- File upload input and button -->
  <input type="file" #fileInput>
  <button (click)="uploadFile(fileInput)">Upload File</button>

    </div>
  `,
    //templateUrl: './landing.component.html'
})
export class LandingComponent {

    constructor(public layoutService: LayoutService, public router: Router, private logService: LogService, private authService: AuthService, private uploadService: UploadService, private transcriptionService: TranscriptionService) {
        this.logToConsole();
       
      }
    
      ngOnInit(): void {
        // Call logToConsole method when the component is initialized
        console.log("hey!")
        
    }

    logToConsole(): void {
        this.logService.logToConsole('damn it, it works!');
      }
    
      signup(): void {
        this.authService.signup('adrian', 'Pass1234!', 'adam@mail.com').subscribe(response => {
          console.log(response);
        });
      }
    
      login(): void {
        this.authService.login('adrian', 'Pass1234!').subscribe(response => {
          console.log(response);
        });
      }
    
      testToken(): void {
        this.authService.testToken().subscribe(
          response => console.log(response),
          error => console.error(error)
        );
      }

      executeIfLoggedIn(): void {
        if (this.authService.isLoggedIn()) {
          // Your logic for logged-in user
          console.log('User is logged in!');
          // Redirect to a protected route for logged-in users
          this.router.navigate(['/']); // Replace '/dashboard' with your desired route
        } else {
          // Your logic for not logged-in user
          console.log('User is not logged in!');
          // Redirect to the login page for not logged-in users
          this.router.navigate(['/landing']); // Replace '/login' with your login route
        }
      }
      
      logout(): void {
        this.authService.logout();

        console.log("logged out!")
      }

      uploadFile(input: HTMLInputElement): void {
        const file = input.files?.[0];
        if (file) {
          this.uploadService.uploadFile(file).subscribe(
            response => {
              console.log('File uploaded successfully:', response);
              // Handle any further logic after successful upload
            },
            error => {
              console.error('Error uploading file:', error);
              // Handle error cases
            }
          );
        } else {
          console.error('No file selected');
        }
      }

      testTranscription(): void {
        // Call the transcription service method here
        this.transcriptionService.generateTranscription('common_voice_pl_38400580_qzxUxlW.mp3', 'sample_nazwa1').subscribe(
          (response) => {
            console.log('Transcription generated successfully:', response);
            // Handle any further logic after successful transcription
          },
          (error) => {
            console.error('Error generating transcription:', error);
            // Handle error cases
          }
        );
      }
}
