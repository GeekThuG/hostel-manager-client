import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.sass']
})
export class UserCredentialsComponent implements OnInit {
  user = {
    password: '',
    email: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
