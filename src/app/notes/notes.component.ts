import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NoteModel} from './note-model';
import {NotesService} from '../notes.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ShareService} from '../share.service';
import {globals} from '../globals';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notesList: NoteModel[];


  constructor(private _router: Router, private notesService: NotesService, private snackBar: MatSnackBar,
              private shareService: ShareService) { }

  ngOnInit() {
    this.notesService.getall().subscribe(result => {
      this.notesList = result;
    });
  }

  edit(id:number):void{
    this._router.navigate(['edit-note/'+id]);
  }

  share(id: number): void {
    this.shareService.shareNote(id).subscribe(result => {
      if(result.message.startsWith("Could")){
        this.snackBar.open(result.message, result.action)._dismissAfter(result.duration);
      }else{
        this.snackBar.open(globals.FRONTEND_URL+"/shared/"+result.message, result.action)._dismissAfter(result.duration);
      }
    });
  }

  noNotes(): boolean{
   if(!this.notesList || this.notesList.length>0){
     return false;
   }else{
     return true;
   }
  }

  newNote(): void {
    this._router.navigate(['/new-note'])
  }

  viewNote(id: number){
    this._router.navigate(['/note/'+id]);
  }

  delete(id: number){
    this.notesService.deleteById(id).subscribe(result => {
      this.snackBar.open(result.message,result.action)._dismissAfter(result.duration);
      this.notesService.getall().subscribe(list => {
        this.notesList = list;
      });
    });
  }
}
