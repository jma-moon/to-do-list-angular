import {User} from './../models/user.model';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Input() total: number;

  @Output() deleteChange: EventEmitter<User> = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {
  }

  deleteUser(user: User) {
    this.deleteChange.emit(user);
  }
}
