import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Room} from '../../room';
import {ActivatedRoute} from '@angular/router';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-rooms-detail',
  templateUrl: './rooms-detail.component.html',
  styleUrls: ['./rooms-detail.component.sass']
})
export class RoomsDetailComponent implements OnInit {
  id: string;
  room: Observable<Room>;

  constructor(private route: ActivatedRoute,
              private roomService: RoomService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.room = this.roomService.byId(this.id);
  }

}
