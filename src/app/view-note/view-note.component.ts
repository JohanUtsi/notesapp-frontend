import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {NotesService} from '../notes.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})
export class ViewNoteComponent implements OnInit {

  title: string;
  noteContent: string;
  public editor = ClassicEditor;
  editorReady: boolean = false;
  private id: number;

  constructor(private route: ActivatedRoute, private noteService: NotesService, private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.editor.isReadOnly = true;
    let id = this.route.snapshot.paramMap.get("id");
    this.id = +id;
    this.noteService.getOne(+id).subscribe(result => {
      this.title = result.title;
      this.noteContent = result.noteContent;
      this.editorReady = true;
    }, error => {

    });
  }

  goBack(){
    this.router.navigate(['/notes']);
  }

  delete(){
    this.noteService.deleteById(this.id).subscribe(result => {
      this.snackbar.open(result.message, result.action)._dismissAfter(result.duration);
      this.router.navigate(['/notes']);
    });
  }

}
