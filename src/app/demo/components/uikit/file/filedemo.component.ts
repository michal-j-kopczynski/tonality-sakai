import { Component } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
    templateUrl: './filedemo.component.html',
})
export class FileDemoComponent {
    uploadedFiles: any[] = [];
    uploadSuccess = false;

    constructor(private uploadService: UploadService) {}

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

    getFileSizeInMB(bytes: number): string {
        const megabytes = bytes / (1024 * 1024);
        return megabytes.toFixed(2);
    }
}
