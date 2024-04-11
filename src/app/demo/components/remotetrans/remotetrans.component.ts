import { Component, OnInit, Input} from '@angular/core';
import { UserFileService } from 'src/app/services/user-file.service';
import { RemoteURLTranscriptionService } from 'src/app/services/remote-urltranscription.service';
import { MenuItem } from 'primeng/api';
import { TaskService } from 'src/app/services/task.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-remotetrans',
  templateUrl: './remotetrans.component.html',
  providers: [MessageService],
})
export class RemotetransComponent {
    //base for uploading transcription with remote url
    transData: any[] = [];
    filteredTransData: any[] = [];
    selectedAudioFile: any; // Property to hold the selected audio file for playing with waveshifter
    selectedTranscription: any; // Define a property to hold the selected transcription object with waveshifter

    editDialogVisible: boolean = false; // Property to control visibility of the edit dialog
    playDialogVisible: boolean = false; // Property to control visibility of the play dialog
    selectedAudioFileName: string = ''; // Property to hold the selected audio file name for transcription
    transcriptionName: string = ''; // Define the transcriptionName property
    
    //crud
    items: MenuItem[] = [];
    cardMenu: MenuItem[] = [];
    //popup messages
    msgs: Message[] = [];
    // Define an array to hold the language options
    languageOptions = ['pl', 'en'];

    // Property to store the selected language
    selectedLanguage: string;
    // unique remote url variables
    remote_url: string = '';


    constructor(private userFileService: UserFileService, 
      private transcriptionService: RemoteURLTranscriptionService,
      private taskService: TaskService,
      private service: MessageService,) { 
      this.selectedTranscription = ""
  }


    generateRemoteTranscription(transcriptionName: string): void {
      if (this.remote_url && transcriptionName) {
          console.error(this.remote_url)
          this.showInfoViaToast()
          
          
              // Call the transcription service method to generate transcription
              //this.transcriptionService.generateTranscription(this.extractFileName(this.selectedAudioFileName), transcriptionName).subscribe(
              this.transcriptionService.generateRemoteTranscription(this.remote_url, transcriptionName, this.selectedLanguage).subscribe(
                  (response) => {
                      console.log('Transcription generated successfully:', response);
                      // Handle any further logic after successful synchronous response
                      this.taskService.setTaskId(response.task_id);
                      console.log(this.taskService.taskId);
                      this.taskService.pollTaskStatus().subscribe(
                          (taskStatusResponse) => {
                              console.log('Task status response:', taskStatusResponse);
                              // Handle task status response here
                              if(taskStatusResponse.status == "completed")
                              {
                                  console.log('Loading message popup...');
                                  this.showSuccessViaToast();
                                  //this.fetchTranscriptions();
                              }
                          },
                          (error) => {
                              console.error('Error polling task status:', error);
                              // Handle error cases
                          }
                      );
                  },
                  (error) => {
                      console.error('Error generating transcription:', error);
                      // Handle error cases
                  }
              );
          
      } else {
          console.error('No audio file selected or transcription name is empty');
          this.showErrorViaToast();
      }
  }


  // asynchronous messages
  showInfoViaToast() {
    this.service.add({ key: 'tst', severity: 'info', summary: 'Info Message', detail: 'Your transrciption is being processed...', life: 6500 });
}

showErrorViaToast() {
    this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'No audio file selected or transcription name is empty', life: 6500 });
}

showSuccessViaToast() {
    this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Your transcription is ready!', life: 6500 });
}
showSuccessViaToastUpload() {
    this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Your file has been succesfully added', life: 6500 });
}
showWarnViaToast() {
    this.service.add({ key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'Succesfully deleted transcription' });
}

}
