import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Room} from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private readonly apiUrl = 'http://localhost:3000/api/rooms';

  constructor(private http: HttpClient) {
  }
  create(room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }
  list(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }
  byId(id: string): Observable<Room> {
    return this.http.get<Room>(this.apiUrl + '/' + id);
  }
}
