import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListRoutingModule } from './filelist-routing.module';
import { FileListComponent } from './filelist.component';
import { UserFileService } from 'src/app/services/user-file.service';

@NgModule({
    imports: [
        CommonModule,
        FileListRoutingModule,
    ],
    declarations: [FileListComponent],
    providers: [
        UserFileService
    ]
})
export class FileListModule { }
