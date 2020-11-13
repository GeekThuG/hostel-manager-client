import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  submitLabel = 'Register';
  title = 'Register';


  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {

  }

  register(form: FormGroup): void {
    const {email, password} = form.value;
    this.userService.register(email, password);
  }
}

