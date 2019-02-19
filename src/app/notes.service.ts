import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {NoteModel} from './notes/note-model';
import {MessageModel} from './message.model';
import {globals} from './globals';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url: string = globals.BACKEND_URL+"/notes";

  constructor(private httpClient: HttpClient) { }

  saveNote(title: string, content: string): Observable<MessageModel>{
    let note:NoteModel = new NoteModel;
    note.title = title;
    note.noteContent = content;
    return this.httpClient.post<MessageModel>(this.url, note);
  }

  getall(): Observable<any>{
    return this.httpClient.get(this.url+"/all");
  }
  getOne(id:number): Observable<any>{
    return this.httpClient.get(this.url+"?id="+id);
  }

  deleteById(id: number): Observable<MessageModel> {
    return this.httpClient.delete<MessageModel>(this.url+"?id="+id);
  }

  updateNote(id:number, title: string, data: string): Observable<MessageModel> {
    let note: NoteModel = new NoteModel;
    note.id = id;
    note.title = title;
    note.noteContent = data;
    return this.httpClient.put<MessageModel>(this.url, note);
  }
}
