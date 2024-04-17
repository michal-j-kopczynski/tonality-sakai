import { Component, OnInit, Input} from '@angular/core';
import { UserFileService } from 'src/app/services/user-file.service';
import { TranscriptionService } from 'src/app/services/transcription.service';
import { MenuItem } from 'primeng/api';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AudioPlayerComponentComponentService } from "src/app/components/my-component/AudioPlayerComponent/audio-player-component/audio-player-component.component.service"


@Component({
    selector: 'app-trans-list',
    templateUrl: './translist.component.html',
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
    
    items: MenuItem[] = [];
    cardMenu: MenuItem[] = [];

    htmlContent:any="//0//jss//1//xd//3//;sss//4//hello//5//its mekggg//" //text in editor
   // htmlContent:any=""
    seconds:number =0
    lines: any;
    constructor(private userFileService: UserFileService, private transcriptionService: TranscriptionService,private data: AudioPlayerComponentComponentService) { 
        this.selectedTranscription = ""
    }


    ngOnInit(): void {
        this.fetchAudioFiles();
        this.fetchTranscriptions();
        this.data.currentMessage.subscribe(message => {
            this.seconds = message;
            this.changeColor(); // Wywołanie funkcji w tym samym komponencie po zmianie wartości seconds
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
    }

    fetchAudioFiles(): void {
        this.userFileService.getFileList().subscribe(
            (files: any[]) => {
                this.audioFiles = files;
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
             },
             (error) => {
                 console.error('Error deleting audio file:', error);
             }
         );
    }

    playAudio(audioFile: any, transcription: any) {
        
        this.selectedAudioFile = audioFile; // Set the selected audio file for playing
        this.playDialogVisible = true; // Show the play dialog
        this.selectedTranscription = transcription;
        this.htmlContent=this.getCurrentTrans()
    }


    hidePlayDialog() {
        this.playDialogVisible = false; // Hide the play dialog
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
            console.error(this.extractFileName(this.selectedAudioFileName))
            
            
                // Call the transcription service method to generate transcription
                this.transcriptionService.generateTranscription(this.extractFileName(this.selectedAudioFileName), transcriptionName).subscribe(
                    (response) => {
                        console.log('Transcription generated successfully:', response);
                      
                        // Handle any further logic after successful transcription
                    },
                    (error) => {
                        console.error('Error generating transcription:', error);
                        // Handle error cases
                    }
                );
            
        } else {
            console.error('No audio file selected or transcription name is empty');
        }
    }


    getAudioUrl(): string {
        // Assuming the 'filename' property holds the URL
        return this.selectedTranscription.filename;
    }
    getCurrentTrans(): string {
        // Assuming the 'filename' property holds the URL
        return this.selectedTranscription.transcript;

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
          customClasses: [
          {
            name: 'quote',
            class: 'quote',
          },
          {
            name: 'redText',
            class: 'redText'
          },
          {
            name: 'titleText',
            class: 'titleText',
            tag: 'h1',
          },
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
    let textColorStart = "<font color=\"red\">" // otwarcie znacznika dla koloru textu
    let textColorEnd=" </font color=\"red\">" // zamknięcie znacznika dla koloru textu

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
   console.log(this.lines.slice(cos2))
   this.lines= this.lines.slice(0,cos2) + textColorEnd+ this.lines.slice(cos2)
   
   //console.log(this.lines)
   this.htmlContent=this.lines

  }
}
