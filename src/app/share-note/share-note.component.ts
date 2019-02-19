import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {ShareService} from '../share.service';
import {SharedNoteModel} from '../shared-note.model';

@Component({
  selector: 'app-share-note',
  templateUrl: './share-note.component.html',
  styleUrls: ['./share-note.component.scss']
})
export class  ShareNoteComponent implements OnInit {

  title: string;
  noteContent: string;
  public editor = ClassicEditor;
  editorReady: boolean = false;


  constructor(private route: ActivatedRoute, private shareService: ShareService) { }

  ngOnInit() {
    this.editor.isReadOnly = true;
    let uniqueActivactionCode: string = this.route.snapshot.paramMap.get("shareCode");
    this.shareService.getNote(uniqueActivactionCode).subscribe(result =>{
      console.log(result);
      this.title = result.note.title;
      this.noteContent = result.note.noteContent;
      this.editorReady = true;
    }, error =>{

    });
  }

}
