import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    constructor(private cookieService: CookieService,){

    }
    changeTheme(theme: string, colorScheme: string) {
        this.cookieService.set('theme', theme);
        this.cookieService.set('colorScheme', colorScheme);
        console.log('Changing theme...');
        location.reload();
    }
}