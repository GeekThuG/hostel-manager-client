import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) {
  }
  register(email: string, password: string): void {
    const credential = {
      email,
      password
    };
    this.http.post(
      this.apiUrl,
      credential
    ).subscribe();
  }


}
