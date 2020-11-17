import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserCredentialsComponent} from './user-credentials/user-credentials.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LogoutComponent} from './logout/logout.component';
import {RoomsListComponent} from './dashboard/rooms-list/rooms-list.component';
import {RoomsDetailComponent} from './dashboard/rooms-detail/rooms-detail.component';

const routes: Routes = [
  { path: 'userCredentials', component: UserCredentialsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'dashboard',  children : [
      { path: 'roomList', component: RoomsListComponent},
      { path: 'roomDetail/:id', component: RoomsDetailComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
