import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransListRoutingModule } from './translist-routing.module';
import { TransListComponent } from './translist.component';
import { UserFileService } from 'src/app/services/user-file.service';
import { FileNamePipe } from 'src/app/pipes/file-name.pipe';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { AudioModule } from 'src/app/components/my-component/AudioPlayerComponent/audio-player-component/audiomodule';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
    imports: [
        CommonModule,
        TransListRoutingModule,
        TableModule,
        ButtonModule,
        RippleModule,
        DialogModule,
        AudioModule,
        FormsModule,
        MenuModule,
        PanelModule,
        HttpClientModule,
        AngularEditorModule
        
    ],
    declarations: [TransListComponent],
    providers: [
        UserFileService
    ]
})
export class TransListModule { }
