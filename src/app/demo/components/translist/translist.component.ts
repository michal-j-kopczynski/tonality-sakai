import { Component, OnInit, Input} from '@angular/core';
import { UserFileService } from 'src/app/services/user-file.service';
import { TranscriptionService } from 'src/app/services/transcription.service';
import { MenuItem } from 'primeng/api';
import { TaskService } from 'src/app/services/task.service';
import { Message, MessageService } from 'primeng/api';
import { UploadService } from 'src/app/services/upload.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AudioService } from 'src/app/components/my-component/AudioPlayerComponent/audio-player-component/audio.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-trans-list',
    templateUrl: './translist.component.html',
    providers: [MessageService,],
    
})
export class TransListComponent implements OnInit {
    audioFiles: any[] = [];
    filteredAudioFiles: any[] = [];
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
    // uploading files
    uploadedFiles: any[] = [];
    uploadSuccess = false;

    //language of the transcription
    // Define an array to hold the language options
    languageOptions = ['pl', 'en'];

    // Property to store the selected language
    selectedLanguage: string;

    htmlContent:any="There was an error. Please try again later..." //text in editor
   // htmlContent:any=""
    seconds:number =0
    lines: any;

    transcriptionsummaryData: string = ''; //can be updated and with data binding automatically shown
    transcription_seconds_data: string = '';
    cookieValue : string = 'default';

    constructor(private userFileService: UserFileService, 
        private transcriptionService: TranscriptionService,
        private taskService: TaskService,
        private service: MessageService,
        private uploadService: UploadService,
        private data: AudioService,
        private sanitizer: DomSanitizer,
        private cookieService: CookieService,) { 
        this.selectedTranscription = ""
        
    }

    ngOnInit(): void {
        this.fetchAudioFiles();
        this.fetchTranscriptions();
        this.data.currentMessage.subscribe(message => {
            this.seconds = message;
            //this.changeColor(); // Wywołanie funkcji w tym samym komponencie po zmianie wartości seconds
          });
        this.items = [
            { label: 'Angular.io', icon: 'pi pi-external-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'pi pi-bookmark', routerLink: ['/theming'] }
        ];

        this.cardMenu = [
            {
                label: 'Save', icon: 'pi pi-fw pi-check'
            },
            {
                label: 'Update', icon: 'pi pi-fw pi-refresh'
            },
            {
                label: 'Delete', icon: 'pi pi-fw pi-trash'
            },
        ];
        
        console.log(this.cookieValue)
        //this.cookieService.set('Test', 'Hello World');
        this.cookieValue = this.cookieService.get('Test2');
        console.log(this.cookieValue)
    }

    fetchAudioFiles(): void {
        this.userFileService.getFileList().subscribe(
            (files: any[]) => {
                //this.audioFiles = files;
                this.audioFiles = files.map(file => this.extractFileName(file.file));
                this.filteredAudioFiles = files;
            },
            (error) => {
                console.error('Error fetching audio files:', error);
            }
        );
    }

    fetchTranscriptions(): void {
        this.transcriptionService.getTranscriptionList().subscribe(
            (transcriptions: any[]) => {
                this.transData = transcriptions;
                this.filteredTransData = transcriptions;
            },
            (error) => {
                console.error('Error fetching audio files:', error);
            }
        );
    }


    extractFileName(fullPath: string): string {
        // Split the full path by '/'
        const parts = fullPath.split('/');
        // Return the last part which is the filename
        return parts[parts.length - 1];
    }
    /*
    onGlobalFilter(filterValue: string) {
        filterValue = filterValue.trim().toLowerCase();
        this.filteredAudioFiles = this.audioFiles.filter((audioFile: any) =>
            audioFile.id.toString().toLowerCase().includes(filterValue) ||
            audioFile.user.toLowerCase().includes(filterValue) ||
            audioFile.file.toLowerCase().includes(filterValue) ||
            audioFile.uploaded_at.toLowerCase().includes(filterValue)
        );
    } 
    */

    regenerate_summary(): void {
        console.log('Regenerating transcription...');
        if (this.selectedTranscription.id) {
            this.showInfoViaToastCustom("Your summary is being regenerated...")
            
            
              
                this.transcriptionService.regenerate_summary(this.selectedTranscription.trans_filename, this.selectedTranscription.uploaded_at).subscribe(
                    (response) => {
                        console.log('Transcription summary response generated successfully:', response);
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

    onGlobalFilter(filterValue: string) {
        filterValue = filterValue.trim().toLowerCase();
        this.filteredTransData = this.transData.filter((transcription: any) =>
            transcription.id.toString().toLowerCase().includes(filterValue) ||
            transcription.user.toLowerCase().includes(filterValue) ||
            transcription.filename.toLowerCase().includes(filterValue) ||
            transcription.uploaded_at.toLowerCase().includes(filterValue) ||
            transcription.trans_filename.toLowerCase().includes(filterValue) ||
            transcription.transcript.toLowerCase().includes(filterValue) 
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

    playAudio(audioFile: any, transcription: any) {
        this.fetchTranscriptions()
        this.selectedAudioFile = audioFile; // Set the selected audio file for playing
        this.playDialogVisible = true; // Show the play dialog
        this.selectedTranscription = transcription;
        this.htmlContent=this.getCurrentTrans()
        this.transcription_seconds_data = this.selectedTranscription.transcript_seconds;
        this.transcriptionsummaryData = this.getCurrentTransSummary();
    }


    hidePlayDialog() {
        this.playDialogVisible = false; // Hide the play dialog
        this.fetchTranscriptions()
    }

    editAudioFile(audioFile: any) {
        this.selectedAudioFile = audioFile; // Set the selected audio file for editing
        this.editDialogVisible = true; // Show the edit dialog
    }

    hideEditDialog() {
        this.editDialogVisible = false; // Hide the edit dialog
    }


    generateTranscription(transcriptionName: string): void {
        if (this.selectedAudioFileName && transcriptionName) {
            // Find the selected audio file object based on the filename
            console.error('1');
            console.error(this.selectedAudioFileName)
            //console.error(this.extractFileName(this.selectedAudioFileName))
            this.showInfoViaToast()
            
            
                // Call the transcription service method to generate transcription
                //this.transcriptionService.generateTranscription(this.extractFileName(this.selectedAudioFileName), transcriptionName).subscribe(
                this.transcriptionService.generateTranscription(this.selectedAudioFileName, transcriptionName, this.selectedLanguage).subscribe(
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


    getAudioUrl(): string {
        // Assuming the 'filename' property holds the URL
        return this.selectedTranscription.filename;
    }

    getCurrentTranshtml(): SafeHtml {
        const htmlContent = this.selectedTranscription.transcript;
        return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
      }
    getCurrentTrans(): string {
        // Assuming the 'filename' property holds the URL
        return this.selectedTranscription.transcript;
    }

    getCurrentTransSummary(): string {
        return this.selectedTranscription.summary;
    }
    save_edited_transcript() {
        console.error('saving...');
        this.transcriptionService.save_edited_transcript(
            this.selectedTranscription.trans_filename, 
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
    

    // asynchronous messages
    showInfoViaToast() {
        this.service.add({ key: 'tst', severity: 'info', summary: 'Info Message', detail: 'Your transrciption is being processed...', life: 6500 });
    }
    showInfoViaToastCustom(message: string) {
        this.service.add({ key: 'tst', severity: 'info', summary: 'Info Message', detail: message, life: 6500 });
    }

    showErrorViaToast() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'No audio file selected or transcription name is empty', life: 6500 });
    }

    showSuccessViaToast() {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Your transcription is ready!', life: 6500 });
    }
    showSuccessViaToastCustom(message: string) {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: message, life: 6500 });
    }
    showSuccessViaToastUpload() {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Your file has been succesfully added', life: 6500 });
    }
    showWarnViaToast() {
        this.service.add({ key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'Succesfully deleted transcription' });
    }

    uploadFile(event: any): void {
        const files = event.files;
        this.uploadService.uploadFile(files[0]).subscribe(
            (response: any) => {
                console.log('File uploaded successfully:', response);
                this.uploadedFiles.push(files[0]);
                this.uploadSuccess = true; 
                this.fetchAudioFiles();
                this.showSuccessViaToastUpload();

            },
            (error: any) => {
                console.error('Error uploading file:', error);
                this.uploadSuccess = false; 
            }
        );
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
            {class: 'times-new-roman', name: 'Times New Roman'},
            {class: 'calibri', name: 'Calibri'},
            {class: 'comic-sans-ms', name: 'Comic Sans MS'}
          ],
          
        uploadWithCredentials: false,
        sanitize: true,
        toolbarPosition: 'top',
        toolbarHiddenButtons: [
          ['bold', 'italic'],
          ['fontSize']
        ]
    };
    changeColor()
    {
    let textColorStart = "<span style=\"background-color:red;\">" // otwarcie znacznika dla koloru textu
    let textColorEnd=" </span style=\"background-color:red;\">" // zamknięcie znacznika dla koloru textu

    this.htmlContent = this.htmlContent.split(textColorStart).join('');

    this.htmlContent = this.htmlContent.split(textColorEnd).join('');


    let regex = new RegExp("(//.+?//)", "gi");
    this.lines = this.htmlContent


    let testowe = this.htmlContent.split('//');
    let lower = testowe.filter(item => Number(item) <= Number(this.seconds) ).filter(Boolean)
    let greater = testowe.filter(item => Number(item) >= Number(this.seconds) ).filter(Boolean)
 
    let regex2 = new RegExp("//"+lower.at(-1)+"//")
    
    let cos = this.lines.search(regex2)
    

  

   this.lines= this.lines.slice(0,cos) + textColorStart + this.lines.slice(cos)

   let cos2 = this.lines.indexOf("//",cos+1);
   cos2 = this.lines.indexOf("//",cos2+5);

  // console.log(cos2)
  // console.log("lower",lower)
   this.lines= this.lines.slice(0,cos2) + textColorEnd+ this.lines.slice(cos2)
   
   //console.log(this.lines)
   console.log(this.lines)
   this.htmlContent=this.lines

  }
}
