import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile.component';
import { UserprofileRoutingModule } from './userprofile-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        UserprofileRoutingModule,
        HttpClientModule, AngularEditorModule ,FormsModule
    ],
    declarations: [UserprofileComponent],
    providers: [
       
    ]
})
export class UserprofileModule { }
