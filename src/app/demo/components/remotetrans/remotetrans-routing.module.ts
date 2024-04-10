import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemotetransComponent } from './remotetrans.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: RemotetransComponent }
    ])],
    exports: [RouterModule]
})
export class RemotetransRoutingModule { }
