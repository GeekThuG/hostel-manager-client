import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  submitLabel = 'Login';
  title = 'Login';

  constructor() { }

  ngOnInit(): void {
  }

  login($event: FormGroup): void {
  }

}
