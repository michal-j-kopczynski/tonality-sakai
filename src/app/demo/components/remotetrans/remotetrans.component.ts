import { Component, OnInit, Input} from '@angular/core';
import { UserFileService } from 'src/app/services/user-file.service';
import { RemoteURLTranscriptionService } from 'src/app/services/remote-urltranscription.service';
import { MenuItem } from 'primeng/api';
import { TaskService } from 'src/app/services/task.service';
import { Message, MessageService } from 'primeng/api';

//for embedding yt video
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
    safe_url: SafeResourceUrl;


    constructor(private userFileService: UserFileService, 
      private transcriptionService: RemoteURLTranscriptionService,
      private taskService: TaskService,
      private service: MessageService,
      public sanitizer: DomSanitizer,) { 
      this.selectedTranscription = ""
  }

  ngOnInit(): void {
    this.fetchTranscriptions();
    this.safe_url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/izGwDsrQ1eQ');   
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

  fetchTranscriptions(): void {
    this.transcriptionService.getRemoteTranscriptionList().subscribe(
        (transcriptions: any[]) => {
            this.transData = transcriptions;
            this.filteredTransData = transcriptions;
        },
        (error) => {
            console.error('Error fetching audio files:', error);
        }
    );
}

deleteTranscription(transcriptionName: string, uploaded_at:string): void {
         
    this.transcriptionService.deleteTranscriptionByName(transcriptionName, uploaded_at).subscribe(
        () => {
            // On success, remove the file from the audioFiles array
            this.transData = this.transData.filter(file => file.uploaded_at !== uploaded_at);
            // Also update the filteredAudioFiles array if necessary
            this.filteredTransData = this.filteredTransData.filter(file => file.uploaded_at !== uploaded_at);
            this.showWarnViaToast();
        },
        (error) => {
            console.error('Error deleting audio file:', error);
        }
    );
}

  onGlobalFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.filteredTransData = this.transData.filter((transcription: any) =>
        transcription.id.toString().toLowerCase().includes(filterValue) ||
        transcription.user.toLowerCase().includes(filterValue) ||
        transcription.remote_title.toLowerCase().includes(filterValue) ||
        transcription.uploaded_at.toLowerCase().includes(filterValue) ||
        transcription.transcript.toLowerCase().includes(filterValue) 
    );
}

playAudio(audioFile: any, transcription: any) {
    this.safe_url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.getVideoId(transcription.remoteurl));   
    this.selectedAudioFile = audioFile; // Set the selected audio file for playing
    this.playDialogVisible = true; // Show the play dialog
    this.selectedTranscription = transcription;
}


hidePlayDialog() {
    this.playDialogVisible = false; // Hide the play dialog
}

getVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}
getEmbedUrl(): SafeResourceUrl {
    const videoId = this.getVideoId(this.selectedTranscription.remote_url);
    
        const embedUrl = `https://www.youtube.com/embed/izGwDsrQ1eQ`;
        
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    
}

getAudioUrl(): SafeResourceUrl {
    // Assuming the 'filename' property holds the URL
    //this.safe_url = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=1ozGKlOzEVc');
    //return this.selectedTranscription.remote_url;
    //this.safe_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedTranscription.remote_url);
    return this.selectedTranscription.remote_url;
}
getCurrentTrans(): string {
    // Assuming the 'filename' property holds the URL
    return this.selectedTranscription.transcript;
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
