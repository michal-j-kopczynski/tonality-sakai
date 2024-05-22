import { Component, OnInit, Input} from '@angular/core';
import { UserFileService } from 'src/app/services/user-file.service';
import { RemoteURLTranscriptionService } from 'src/app/services/remote-urltranscription.service';
import { MenuItem } from 'primeng/api';
import { TaskService } from 'src/app/services/task.service';
import { Message, MessageService } from 'primeng/api';

//for embedding yt video
import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';

//editor
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AudioService } from 'src/app/components/my-component/AudioPlayerComponent/audio-player-component/audio.service'

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

    transcriptionsummaryData: string = ''; //can be updated and with data binding automatically shown
    transcription_seconds_data: string = '';
    transcription_speaker_diarization: string = '';
    transcriptionNotesData: string = '';

    //questions and answers
    question: string = '';
    answer: string = '';


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


    //editor
    htmlContent:any="There was an error. Please try again later..." //text in editor
   // htmlContent:any=""
    seconds:number =0
    lines: any;

    constructor(private userFileService: UserFileService, 
      private transcriptionService: RemoteURLTranscriptionService,
      private taskService: TaskService,
      private service: MessageService,
      public sanitizer: DomSanitizer,
      private data: AudioService,) { 
      this.selectedTranscription = ""
  }

  ngOnInit(): void {
    this.fetchTranscriptions();
    this.safe_url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/izGwDsrQ1eQ');
    this.data.currentMessage.subscribe(message => {
        this.seconds = message;
        //this.changeColor(); // Wywołanie funkcji w tym samym komponencie po zmianie wartości seconds
      });
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
                      this.taskService.pollTaskStatus(response.task_id).subscribe(
                          (taskStatusResponse) => {
                              console.log('Task status response:', taskStatusResponse);
                              // Handle task status response here
                              if(taskStatusResponse.status == "completed")
                              {
                                  console.log('Loading message popup...');
                                  this.showSuccessViaToast();
                                  this.fetchTranscriptions();
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

regenerate_summary(): void {
    console.log('Regenerating transcription...');
    if (this.selectedTranscription.id && this.selectedTranscription.trans_name) {
        console.error(this.remote_url)
        this.showInfoViaToastCustom("Your summary is being regenerated...")
        
        
          
            this.transcriptionService.regenerate_summary_remote(this.selectedTranscription.remoteurl, this.selectedTranscription.trans_name).subscribe(
                (response) => {
                    console.log('Transcription summary response generated successfully:', response);
                    // Handle any further logic after successful synchronous response
                    this.taskService.setTaskId(response.task_id);
                    console.log(this.taskService.taskId);
                    this.taskService.pollTaskStatus(response.task_id).subscribe(
                        (taskStatusResponse) => {
                            console.log('Task status response:', taskStatusResponse);
                            // Handle task status response here
                            if(taskStatusResponse.status == "completed")
                            {
                                console.log('Loading message popup...');
                                this.showSuccessViaToastCustom("Your summary is ready!");
                                this.transcriptionsummaryData = taskStatusResponse.result
                                this.fetchTranscriptions();
                                
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


regenerate_notes(): void {
    console.log('Regenerating notes...');
    if (this.selectedTranscription.id) {
        this.showInfoViaToastCustom("Your notes are being regenerated...")
        
        
          
            this.transcriptionService.regenerate_notes_remote(this.selectedTranscription.remoteurl, this.selectedTranscription.trans_name).subscribe(
                (response) => {
                    console.log('Notes response generated successfully:', response);
                    // Handle any further logic after successful synchronous response
                    this.taskService.setTaskId(response.task_id);
                    console.log(this.taskService.taskId);
                    this.taskService.pollTaskStatus(response.task_id).subscribe(
                        (taskStatusResponse) => {
                            console.log('Task status response:', taskStatusResponse);
                            // Handle task status response here
                            if(taskStatusResponse.status == "completed")
                            {
                                console.log('Loading message popup...');
                                this.showSuccessViaToastCustom("Your notes are ready!");
                                this.transcriptionNotesData = taskStatusResponse.result
                                this.fetchTranscriptions();
                                
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

    this.htmlContent=this.getCurrentTrans()
    this.transcription_seconds_data = this.selectedTranscription.transcript_seconds;
    this.transcription_speaker_diarization = this.selectedTranscription.speaker_diarization;
    this.transcriptionsummaryData = this.getCurrentTransSummary();
    this.transcriptionNotesData = this.getCurrentTransNotes();
    
}


hidePlayDialog() {
    this.playDialogVisible = false; // Hide the play dialog
    this.fetchTranscriptions()
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
    return this.selectedTranscription.transcript;
}

getCurrentTransSummary(): string {
    return this.selectedTranscription.summary;
}

getCurrentTransNotes(): string {
    return this.selectedTranscription.notes;
}

  // asynchronous messages

  showInfoViaToastCustom(message: string) {
    this.service.add({ key: 'tst', severity: 'info', summary: 'Info Message', detail: message, life: 6500 });
}


showSuccessViaToastCustom(message: string) {
    this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: message, life: 6500 });
}


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

editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        //{class: 'times-new-roman', name: 'Times New Roman'},
        //{class: 'calibri', name: 'Calibri'},
        //{class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

save_edited_transcript_remote() {
    console.error('saving...');
    this.transcriptionService.save_edited_transcript_remote(
        this.selectedTranscription.trans_name, 
        this.selectedTranscription.uploaded_at, 
        this.htmlContent
    ).subscribe(
        response => {
            console.log('Save successful:', response);
            this.showSuccessViaToastCustom("Save successful");
        },
        error => {
            console.error('Error saving:', error);
        }
    );
}

getCurrentTranshtml(): SafeHtml {
    const htmlContent = this.selectedTranscription.transcript;
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }


  onSubmitQuestion() {
    this.processQuestion(this.question);
  }

  

  processQuestion(question: string): void {
    console.log('processing question...');
    if (this.selectedTranscription.id && this.selectedTranscription.trans_name) {
        console.error(this.remote_url)
        this.showInfoViaToastCustom("Your question is being processed...")
        
            this.transcriptionService.ask_question(this.selectedTranscription.trans_name, this.selectedTranscription.uploaded_at, question).subscribe(
                (response) => {
                    console.log('working...:', response);
                    // Handle any further logic after successful synchronous response
                    this.taskService.setTaskId(response.task_id);
                    console.log(this.taskService.taskId);
                    this.taskService.pollTaskStatus(response.task_id).subscribe(
                        (taskStatusResponse) => {
                            console.log('Task status response:', taskStatusResponse);
                            // Handle task status response here
                            if(taskStatusResponse.status == "completed")
                            {
                                console.log('Loading message popup...');
                                this.showSuccessViaToastCustom("Answer was generated succesfully!");
                                this.answer = taskStatusResponse.result
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


}
