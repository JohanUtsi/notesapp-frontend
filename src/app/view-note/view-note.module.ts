import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewNoteComponent } from './view-note.component';
import {MatCardModule, MatIconModule, MatMenuModule, MatSnackBarModule} from '@angular/material';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [ViewNoteComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CKEditorModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [ViewNoteComponent]
})
export class ViewNoteModule { }
