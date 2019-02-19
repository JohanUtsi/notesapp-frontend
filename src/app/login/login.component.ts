import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import {Observable} from 'rxjs/index';
import {LoginService} from './login-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _router: Router,
              private _loginService: LoginService,
              private _formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.setUpForm();
  }

  register(): void{
    this._router.navigate(["/register"]);
  }

  private setUpForm():void{
    this.loginForm = this._formBuilder.group({
      username: [{value: '', disabled: false}, Validators.required],
      password: [{value: '', disabled: false}, Validators.required],
    });
  }

  submit():void{
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;

      this._loginService.doLogin(username,password).subscribe(result => {
        console.log("STATUS "+ result.status);
        if(result.status==200){
          console.log(result.headers.get('Authorization'));
          localStorage.setItem('token', result.headers.get('Authorization'));
          this._router.navigate(['/notes']);
        }else{
          this._snackBar.open('Wrong credentials', 'Close');
        }
      }, error => {
        this._snackBar.open('Wrong credentials', 'Close');
    })
  }

}
