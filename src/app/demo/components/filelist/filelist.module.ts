import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListRoutingModule } from './filelist-routing.module';
import { FileListComponent } from './filelist.component';
import { UserFileService } from 'src/app/services/user-file.service';
import { FileNamePipe } from 'src/app/pipes/file-name.pipe';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { AudioModule } from 'src/app/components/my-component/AudioPlayerComponent/audio-player-component/audiomodule';

@NgModule({
    imports: [
        CommonModule,
        FileListRoutingModule,
        TableModule,
        ButtonModule,
        RippleModule,
        DialogModule,
        AudioModule,
    ],
    declarations: [FileListComponent, FileNamePipe],
    providers: [
        UserFileService
    ]
})
export class FileListModule { }
