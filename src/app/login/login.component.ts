import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  submitLabel = 'Login';
  title = 'Login';
  notLogin = false;
  message = 'Erreur de connexion';


  constructor(private readonly userService: UserService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  login(form: FormGroup): void {
    const {email, password} = form.value;
    this.userService.login(email, password);
    this.router.navigate(['/dashboard']);
  }

}
