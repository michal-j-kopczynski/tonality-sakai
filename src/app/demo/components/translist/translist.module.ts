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
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from "primeng/dropdown";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';


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
        MessagesModule,
        MessageModule,
        ToastModule,
        InputTextModule,
        FileUploadModule,
        DropdownModule,
        AngularEditorModule,
        HttpClientModule
        
        
    ],
    declarations: [TransListComponent],
    providers: [
        UserFileService,
        MessageService
    ]
})
export class TransListModule { }
