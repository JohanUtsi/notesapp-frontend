import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditNoteComponent } from './edit-note.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [EditNoteComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    CKEditorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [EditNoteComponent]
})
export class EditNoteModule { }
