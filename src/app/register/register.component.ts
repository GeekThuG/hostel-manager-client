import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    const {required, minLength, email} = Validators;
    this.registrationForm = this.fb.group({
      email: ['', [email, required]],
      password: ['', [minLength(8), required]],
    });
  }

  register(): void {
    // tslint:disable-next-line:no-unused-expression
    this.registrationForm.value;
  }
}
