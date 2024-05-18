import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LogService } from 'src/app/services/log.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class SigninComponent {

    valCheck: string[] = ['remember'];
    email: string = '';
    username: string = '';
    password: string = '';
    signupError: string | null = null;

    constructor(public layoutService: LayoutService, private logService: LogService, private authService: AuthService, public router: Router) 
    { 
        this.logToConsole();
    }
    
    logToConsole(): void {
        this.logService.logToConsole('Service is working, hell yeah!');
    }

    signup(): void {
        this.authService.signup(this.username, this.password, this.email).subscribe(
            response => {
                console.log(response);
                // Redirect user to home page or handle successful registration
                // For example, navigate to a success page or display a success message
                this.router.navigate(['/']);
            },
            error => {
                console.error(error);
                // Handle signup error (e.g., display error message to user)
                this.signupError = 'Error occurred during registration. Please try again later.';
            }
        );
    }
}
