import { UserApiService } from './user-api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './../models/user.model';
import {Injectable} from '@angular/core';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private _totalUsers: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private userApiService: UserApiService) {
    this.refreshUsers();
  }

  public get users$(): Observable<User[]> {
    return this._users.asObservable();
  }

  public get totalUsers$(): Observable<number> {
    return this._totalUsers.asObservable();
  }

  public refreshUsers() {
    this.userApiService.findAll().pipe(take(1)).subscribe((userData) => {
      this._users.next(userData.data);
      this._totalUsers.next(userData.total);
    });
  }

}
