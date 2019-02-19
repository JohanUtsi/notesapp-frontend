import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {MessageModel} from '../message.model';
import {globals} from '../globals';

@Injectable()
export class RegisterService {

  private registerUrl: string = globals.BACKEND_URL+"/public/";
  constructor(private _httpClient: HttpClient) { }

  public register(username: string, email: string, password: string, firstName: string, lastName:string): Observable<MessageModel>{
    return this._httpClient.post<MessageModel>(this.registerUrl+"register", {
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password
    })
  }

  activate(uniqueActivactionCode: string): Observable<MessageModel> {
    return this._httpClient.put<MessageModel>(this.registerUrl+"activate?code="+uniqueActivactionCode,"");
  }
}
