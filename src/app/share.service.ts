import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {MessageModel} from './message.model';
import {SharedNoteModel} from './shared-note.model';
import {globals} from './globals';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private url: string = globals.BACKEND_URL+"/public/share";

  constructor(private httpClient: HttpClient) { }

  getNote(uuid: string): Observable<SharedNoteModel>{
    return this.httpClient.get<SharedNoteModel>(this.url + "?uuid=" + uuid);
  }

  shareNote(id: number): Observable<MessageModel>{
    return this.httpClient.put<MessageModel>(this.url + "?id=" + id,"");
  }


}
