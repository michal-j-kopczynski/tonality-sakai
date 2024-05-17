import { Component, ElementRef, ViewChild,OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    tieredItems: MenuItem[] = [];

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


    ngOnInit()
    {
        this.tieredItems = [
            {
                label: 'Navigation',
                icon: 'pi pi-fw pi-bars',
                items: [
                    
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: '/'
                    },
                    {
                        label: 'Transcriptions & Notes',
                        icon: 'pi pi-fw pi-microphone',
                        routerLink: '/transcription-list'
                    },
                    {
                        label: 'Remote URL Transcriptions & Notes',
                        icon: 'pi pi-fw pi-youtube',
                        routerLink: '/rem-transcription-list'
                    },
                    {
                        label: 'Uploaded files',
                        icon: 'pi pi-fw pi-file-export',
                        routerLink: '/file-list'
                    },
                ]
            },
            
            
            {
                label: 'Profile',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-fw pi-cog',
                        routerLink: '/settings'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-fw pi-sign-out',
                        command: () => this.logout() 
                    },
                ]
            },
            {
                label: 'Documentation',
                icon: 'pi pi-fw pi-book',
                routerLink: '/documentation'
            },
            { separator: true },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-sign-out',
                command: () => this.logout() 
            },
            
        ];

    }


}
