import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import * as jwt_decode from 'jwt-decode';
import {globals} from '../globals';

export const TOKEN_NAME: string = 'token';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  private loginUrl: string = globals.BACKEND_URL+"/login";
  private headers = new HttpHeaders().set('Content-type', 'Application/JSON');
  private options = {headers: this.headers};



  constructor(private _http: HttpClient){
  }

  public doLogin(username: string, password: string): Observable<any>{
    return this._http.post(this.loginUrl,{
      username: username,
      password: password
    }, {observe: 'response'});
  }


  public getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  public setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }


  public getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  public isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

}
