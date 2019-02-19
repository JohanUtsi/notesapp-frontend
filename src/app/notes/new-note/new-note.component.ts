import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {ChangeEvent} from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {NotesService} from '../../notes.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  public editor = ClassicEditor;
  private data = "";
  newNoteForm: FormGroup;

  constructor(private noteService: NotesService, private router: Router, private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.setUpForm();
  }


  submit(): void {
    let title = this.newNoteForm.controls['title'].value;
    this.noteService.saveNote(title, this.data).subscribe(result => {
      this.snackBar.open(result.message, result.action)._dismissAfter(result.duration);
      this.router.navigate(["/notes"]);
    });
  }

  cancel(){
    this.router.navigate(["/notes"]);
  }

  private setUpForm(){
    this.newNoteForm = this.formBuilder.group({
      title: [{value: '', disabled: false}, [Validators.required, Validators.maxLength(50)]]
    });
  }

  onChange({editor}: ChangeEvent){
    this.data = editor.getData();
  }

}
