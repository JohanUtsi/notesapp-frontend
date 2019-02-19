import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewNoteComponent} from './new-note.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [NewNoteComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    CKEditorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [NewNoteComponent]
})
export class NewNoteModule {
}
