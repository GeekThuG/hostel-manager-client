import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.sass']
})
export class UserCredentialsComponent implements OnInit {

  formRegister: FormGroup;
  @Input() title: string;
  @Input() submitLabel: string;
  @Output() registrationForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();


  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    const {required, minLength, email} = Validators;
    this.formRegister = this.fb.group({
      email: ['toto@test.fr', [email, required]],
      password: ['123456789', [minLength(8), required]],
    });
  }

  sendCredentials(): void {
    // tslint:disable-next-line:no-unused-expression
    this.registrationForm.emit(this.formRegister);
  }

}
