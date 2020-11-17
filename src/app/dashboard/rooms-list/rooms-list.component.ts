import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {RoomService} from '../../room.service';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.sass']
})
export class RoomsListComponent implements OnInit {


  constructor(private roomService: RoomService) { }

  successMessage = null;
  errorMessage = null;
  nameControl: FormControl;
  list = this.roomService.list();

  ngOnInit(): void {
    this.nameControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  }

  createRoom(): void {
    // reset messages
    this.successMessage = null;
    this.errorMessage = null;

    this.roomService.create({name: this.nameControl.value}).pipe(
      tap(() => {
        this.successMessage = 'Votre chambre a bien été créée';
      }),
      catchError((error) => {
       return this.errorMessage = 'Erreur dans la création de la chambre: ' + error.error.message;
      })
    ).subscribe();
  }
}
