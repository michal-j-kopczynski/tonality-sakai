import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransListComponent } from './translist.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TransListComponent }
    ])],
    exports: [RouterModule]
})
export class TransListRoutingModule { }
