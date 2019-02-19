import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {NotesService} from '../notes.service';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NoteModel} from '../notes/note-model';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  public editor = ClassicEditor;
  editNoteForm: FormGroup;
  noteContent: string;
  private formReady: boolean = false;
  private id: number;

  constructor(private noteService: NotesService, private router: Router, private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.id=+id;
    this.noteService.getOne(+id).subscribe(note => {
      this.setUpForm(note);
    });
  }


  submit(): void {
    let title = this.editNoteForm.controls['title'].value;
    this.noteService.updateNote(this.id, title, this.noteContent).subscribe(result => {
      this.snackBar.open(result.message, result.action)._dismissAfter(result.duration);
      this.router.navigate(["/notes"]);
    });
  }

  cancel(){
    this.router.navigate(["/notes"]);
  }

  private setUpForm(note: NoteModel){
    this.editNoteForm = this.formBuilder.group({
      title: [{value: note.title, disabled: false}, [Validators.required, Validators.maxLength(50)]]
    });
    this.noteContent = note.noteContent;
    this.formReady = true;
  }

  onChange({editor}: ChangeEvent){
    this.noteContent = editor.getData();
  }

}
