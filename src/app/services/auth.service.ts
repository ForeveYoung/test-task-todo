import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserDTO } from '../models/user.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(catchError(e => throwError(e)));
  }

  addUser(config: UserDTO) {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', config)
    .pipe(catchError(e => throwError(e)));
  }
}
