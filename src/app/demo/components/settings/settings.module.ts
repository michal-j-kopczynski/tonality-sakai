import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
        PanelModule
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule { }
