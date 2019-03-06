import {UserEditPageComponent} from './user-edit-page/user-edit-page.component';
import {UserCreatePageComponent} from './user-create-page/user-create-page.component';
import {UserListPageComponent} from './user-list-page/user-list-page.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: UserListPageComponent,
      },
      {
        path: 'create',
        component: UserCreatePageComponent,
      },
      {
        path: 'edit/:id',
        component: UserEditPageComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
