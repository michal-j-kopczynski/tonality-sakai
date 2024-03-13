import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserprofileComponent } from './userprofile.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UserprofileComponent }
    ])],
    exports: [RouterModule]
})
export class UserprofileRoutingModule { }
