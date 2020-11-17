import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import { Token } from './token';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'http://localhost:3000/api/users';
  private readonly userSubject = new BehaviorSubject<User>(null);
  private token: Token;
  constructor(private http: HttpClient,
              private readonly router: Router) {
  }
  readonly user$ = this.userSubject.asObservable();

  get user(): User {
    return this.userSubject.value;
  }

  get access_token(): string | null {
    return this.token?.id;
  }
  register(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, {email, password});
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + this.token.userId).pipe(
      // save user
      tap(user => this.userSubject.next(new User(user)))
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/login', {email, password}).pipe(
      tap(token => this.token = token)
      // switchMap(() => this.getProfile())
  );
  }

  logout(): Observable<boolean> {
    const params = {access_token: this.access_token};
    return this.http.post<void>(this.apiUrl + '/logout', null, {params}).pipe(
      // remove local instance of user and token
      tap(() => {
        this.userSubject.next(null);
        this.token = null;
      }),
      // return true if success
      map(() => true)
    );
  }


}
