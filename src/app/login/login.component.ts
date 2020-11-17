import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { Credentials } from '../credentials';
import {catchError, tap} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  submitLabel = 'Login';
  title = 'Login';
  successMessage = null;
  errorMessage = null;


  constructor(private readonly userService: UserService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  login(form: FormGroup): void {
    // reset messages
    this.successMessage = null;
    this.errorMessage = null;
    const {email, password} = form.value;

    this.userService.login(email, password).pipe(
      tap(() => this.router.navigateByUrl('/dashboard/roomList')),
      catchError((error) => {
      return this.errorMessage = 'Erreur de connexion: ' + error ;
      })
      ).subscribe();
  }
}
