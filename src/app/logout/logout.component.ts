import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  submitLogout = 'Logout';

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout().pipe(
      tap(this.goToHome.bind(this))
    ).subscribe();
  }

  goToHome() {

  }
}
