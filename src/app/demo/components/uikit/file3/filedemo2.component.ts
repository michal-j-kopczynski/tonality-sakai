import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './filedemo2.component.html',
    providers: [MessageService]
})
export class FileDemo2Component {

    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

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
