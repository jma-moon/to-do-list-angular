import { UserApiService } from './../services/user-api.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {take} from 'rxjs/operators';
import {UserDataService} from '../services/user-data.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {

  public users$: Observable<User[]>;
  public totalUsers$: Observable<number>;

  constructor(private userDataService: UserDataService, private userApiService: UserApiService) {}

  ngOnInit() {
    this.userDataService.refreshUsers();
    this.users$ = this.userDataService.users$;
    this.totalUsers$ = this.userDataService.totalUsers$;
  }

  deleteUser(user: User) {
    this.userApiService.delete(user.id).pipe(take(1)).subscribe((userData) => {
      this.userDataService.refreshUsers();
    });
  }

}
