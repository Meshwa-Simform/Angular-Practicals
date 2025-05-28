import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<User[]> {
    // Fetch data from the API
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
