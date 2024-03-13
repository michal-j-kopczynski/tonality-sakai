import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private authService: AuthService, public router: Router) { }

    showProfileOptions() {
        this.layoutService.state.profileSidebarVisible = !this.layoutService.state.profileSidebarVisible;
    }

    loadprofile() {
        this.router.navigate(["/userprofile"]);
    }

    logout() {
        this.authService.logout();
        console.log("logged out!")
        this.router.navigate(['auth/login']);
    }
}
