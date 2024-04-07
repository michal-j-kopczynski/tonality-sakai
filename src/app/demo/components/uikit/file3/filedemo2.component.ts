import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadService } from 'src/app/services/upload.service';

@Component({
    templateUrl: './filedemo2.component.html',
    providers: [MessageService]
})
export class FileDemo2Component {

    uploadedFiles: any[] = [];
    uploadSuccess = false;

    constructor(private uploadService: UploadService, private messageService: MessageService) {}

    uploadFile(event: any): void {
        const files = event.files;
        this.uploadService.uploadFile(files[0]).subscribe(
            (response: any) => {
                console.log('File uploaded successfully:', response);
                this.uploadedFiles.push(files[0]);
                this.uploadSuccess = true; 
            },
            (error: any) => {
                console.error('Error uploading file:', error);
                this.uploadSuccess = false; 
            }
        );
    }

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    onBasicUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

}
