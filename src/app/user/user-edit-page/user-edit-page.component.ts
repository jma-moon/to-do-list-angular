import {UserApiService} from './../services/user-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit {

  public user: User;

  constructor(private userApiService: UserApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.userApiService.findById(id).pipe(take(1)).subscribe((userData) => {
      this.user = userData.data;
    });
  }

  updateUser(updatedUser: User) {
    this.userApiService.update(updatedUser, this.user.id).pipe(take(1)).subscribe((userData) => {
      this.router.navigate(['/users/list'], {relativeTo: this.route});
    });
  }
}
