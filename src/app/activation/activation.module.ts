import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivationComponent } from './activation.component';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [ActivationComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
   exports: [ActivationComponent]
})
export class ActivationModule { }
