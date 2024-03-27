import { Component, OnInit } from '@angular/core';
import { UserFileService } from 'src/app/services/user-file.service';

@Component({
    selector: 'app-file-list',
    templateUrl: './filelist.component.html',
})
export class FileListComponent implements OnInit {
    audioFiles: any[] = [];
    filteredAudioFiles: any[] = [];
    selectedAudioFile: any; // Property to hold the selected audio file
    editDialogVisible: boolean = false; // Property to control visibility of the edit dialog
    playDialogVisible: boolean = false; // Property to control visibility of the play dialog

    constructor(private userFileService: UserFileService) { }

    ngOnInit(): void {
        this.fetchAudioFiles();
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

    extractFileName(fullPath: string): string {
        // Split the full path by '/'
        const parts = fullPath.split('/');
        // Return the last part which is the filename
        return parts[parts.length - 1];
    }

    onGlobalFilter(filterValue: string) {
        filterValue = filterValue.trim().toLowerCase();
        this.filteredAudioFiles = this.audioFiles.filter((audioFile: any) =>
            audioFile.id.toString().toLowerCase().includes(filterValue) ||
            audioFile.user.toLowerCase().includes(filterValue) ||
            audioFile.file.toLowerCase().includes(filterValue) ||
            audioFile.uploaded_at.toLowerCase().includes(filterValue)
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

    playAudio(audioFile: any) {
        this.selectedAudioFile = audioFile; // Set the selected audio file for playing
        this.playDialogVisible = true; // Show the play dialog
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
}
