import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserListPageComponent} from './user-list-page/user-list-page.component';
import {UserCreatePageComponent} from './user-create-page/user-create-page.component';
import {UserFormComponent} from './user-form/user-form.component';
import {SharedModule} from '../shared/shared.module';
import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';

@NgModule({
  declarations: [UserComponent, UserListComponent, UserListPageComponent, UserCreatePageComponent, UserFormComponent, UserEditPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule {}
