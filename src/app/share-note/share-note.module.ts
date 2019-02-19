import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareNoteComponent } from './share-note.component';
import {MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [ShareNoteComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CKEditorModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [ShareNoteComponent]
})
export class ShareNoteModule { }
