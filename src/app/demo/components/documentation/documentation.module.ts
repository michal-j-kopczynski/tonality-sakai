import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
    imports: [
        CommonModule,
        DocumentationRoutingModule,
        PanelModule
    ],
    declarations: [DocumentationComponent]
})
export class DocumentationModule { }
