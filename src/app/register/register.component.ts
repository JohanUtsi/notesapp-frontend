import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from './register.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  initialized: boolean = false;

  constructor(private _formBuilder: FormBuilder,
              private registerService: RegisterService,
              private snackBar: MatSnackBar,
              private _router : Router) {}

  ngOnInit() {
    this.setFormGroup();

  }

  public setFormGroup(): void{
    this.registerForm = this._formBuilder.group({
      username: [{value: '', disabled: false}, Validators.required],
      password: [{value: '', disabled: false}, Validators.required],
      email: [{value: '', disabled: false}, Validators.compose([
        Validators.email, Validators.required
      ])],
      firstName: [{value: '', disabled: false}],
      lastName: [{value: '', disabled: false}],
    });

    this.initialized = true;
}

  submit(): void{
    let username = this.registerForm.controls['username'].value;
    let email = this.registerForm.controls['email'].value;
    let firstName = this.registerForm.controls['firstName'].value;
    let lastName = this.registerForm.controls['lastName'].value;
    let password = this.registerForm.controls['password'].value;

    this.registerService.register(username, email, password, firstName, lastName).subscribe(response => {
        this.snackBar.open(response.message, response.action)._dismissAfter(response.duration);
        this._router.navigate(["/login"]);
    }, error => {
      this.messageSnackBar("Something went wrong, please try again later");
    });

  }

  private messageSnackBar(message:string): void {
    this.snackBar.open(message, "Close")._dismissAfter(6000);
  }

}
