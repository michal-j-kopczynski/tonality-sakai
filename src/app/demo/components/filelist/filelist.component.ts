import { Component, OnInit } from '@angular/core';
import { UserFileService } from 'src/app/services/user-file.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'filelist-element',
    templateUrl: './filelist.component.html',
    styleUrls: ['./filelist.component.scss'],
    
})
export class FileListComponent implements OnInit {
    fileList: string[] = [];

    constructor(private userFileService: UserFileService) { }

    ngOnInit(): void {
        this.getFileList();
    }

    getFileList(): void {
        this.userFileService.getFileList()
            .subscribe(files => this.fileList = files);
    }
}