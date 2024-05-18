import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LogService } from '../../../../services/log.service';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];
    email: string = '';
    password: string = '';
    loginError: string | null = null;

    constructor(public layoutService: LayoutService, private logService: LogService, private authService: AuthService, public router: Router, private serviceMess: MessageService,) 
    { 
        this.logToConsole();
    }
    
    logToConsole(): void {
        this.logService.logToConsole('Service is working, hell yeah!');
    }

    login(): void {
        this.authService.login(this.email, this.password).subscribe(
            response => {
                console.log(response);
                // Redirect user to home page on successful login
                this.router.navigate(['/']);
            },
            error => {
                console.error(error);
            // Handle login error (e.g., display error message to user)
            this.loginError = 'Sorry, your password was incorrect. Please double-check your password.';
            this.showWarnViaToast(this.loginError);
            }
        );  
    }
    showWarnViaToast(message: string): void {
        this.serviceMess.add({ key: 'tst', severity: 'warn', summary: 'Warn Message', detail: message, life: 10500 });
    }  
}
