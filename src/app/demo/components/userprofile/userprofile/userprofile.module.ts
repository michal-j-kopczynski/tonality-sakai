import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile.component';
import { UserprofileRoutingModule } from './userprofile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        UserprofileRoutingModule,
    ],
    declarations: [UserprofileComponent],
    providers: [
       
    ]
})
export class UserprofileModule { }
