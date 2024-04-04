import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { FileDemo2RoutingModule } from './filedemo2-routing.module';
import { FileDemo2Component } from './filedemo2.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		FileDemo2RoutingModule,
		FileUploadModule
	],
	declarations: [FileDemo2Component],
})
export class FileDemo2Module { }
