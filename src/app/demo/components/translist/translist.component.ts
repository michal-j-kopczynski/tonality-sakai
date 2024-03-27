import { Component, OnInit, Input} from '@angular/core';
import { UserFileService } from 'src/app/services/user-file.service';
import { TranscriptionService } from 'src/app/services/transcription.service';
import { MenuItem } from 'primeng/api';


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

    constructor(private userFileService: UserFileService, private transcriptionService: TranscriptionService) { 
        this.selectedTranscription = ""
    }

    ngOnInit(): void {
        this.fetchAudioFiles();
        this.fetchTranscriptions();

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
    deleteAudioFile(fileName: string): void {
         
         this.userFileService.deleteFileByName(fileName).subscribe(
             () => {
                 // On success, remove the file from the audioFiles array
                 this.audioFiles = this.audioFiles.filter(file => file.file !== fileName);
                 // Also update the filteredAudioFiles array if necessary
                 this.filteredAudioFiles = this.filteredAudioFiles.filter(file => file.file !== fileName);
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
}
