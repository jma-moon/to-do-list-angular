import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {UserApiService} from '../services/user-api.service';
import {take} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-create-page',
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.scss']
})
export class UserCreatePageComponent implements OnInit {

  constructor(private userApiService: UserApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  createUser(user: User) {
    this.userApiService.create(user).pipe(take(1)).subscribe((userData) => {
      this.router.navigate(['/users/list'], {relativeTo: this.route});
    });
  }

}
