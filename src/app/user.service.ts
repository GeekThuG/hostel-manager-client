import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrlRegister = 'http://localhost:3000/api/users';
  private readonly apiUrlLogin = 'http://localhost:3000/api/users/login';
  constructor(private http: HttpClient,
              private readonly router: Router) {
  }
  register(email: string, password: string): void {
    const credential = {
      email,
      password
    };
    this.http.post(
      this.apiUrlRegister,
      credential
    ).subscribe();
  }
  login(email: string, password: string): void {
    const credential = {
      email,
      password
    };
    this.http.post(
      this.apiUrlLogin,
      credential
    ).subscribe();
  }


}
