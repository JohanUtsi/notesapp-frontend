import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {isNullOrUndefined} from 'util';
import {RegisterService} from '../register/register.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {

  activcationMessage: string = "activating....";

  constructor(private route: ActivatedRoute,
              private registerService: RegisterService,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    let uniqueActivactionCode: string = this.route.snapshot.paramMap.get("activationCode");
    if (uniqueActivactionCode != "" && !isNullOrUndefined(uniqueActivactionCode)) {
      this.registerService.activate(uniqueActivactionCode).subscribe(result => {
        this.snackbar.open(result.message, result.action)._dismissAfter(result.duration);
        this.activcationMessage = "activation successful!";
      }), error => {
        this.activcationMessage = "activation failed";
        };
    }
  }

}
