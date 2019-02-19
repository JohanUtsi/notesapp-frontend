import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatDialogModule, MatIconModule, MatMenuModule, MatSnackBarModule} from '@angular/material';
import {NotesComponent} from './notes.component';
import {NewNoteModule} from './new-note/new-note.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [NotesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NewNoteModule,
    MatMenuModule,
    MatSnackBarModule

  ],
  exports: [NotesComponent]
})
export class NotesModule { }
