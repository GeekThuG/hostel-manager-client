import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {UserService} from '../user.service';
import {Credentials} from '../credentials';
import { catchError, tap, map } from 'rxjs/operators';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  submitLabel = 'Register';
  title = 'Register';

  errorMessage = null;
  successMessage = null;


  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {

  }

  register(form: FormGroup): void {
    const {email, password} = form.value;
    this.userService.register(email, password).pipe(
      tap(() => {
        this.successMessage = 'Votre inscription a bien été prise en compte';
      }),
      catchError((error) => {
        return this.errorMessage = 'Erreur dans l\'inscription: ' + error;
      })
    ).subscribe();
  }
}

