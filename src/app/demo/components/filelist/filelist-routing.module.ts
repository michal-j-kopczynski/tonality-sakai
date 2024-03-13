import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileListComponent } from './filelist.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: FileListComponent }
    ])],
    exports: [RouterModule]
})
export class FileListRoutingModule { }
