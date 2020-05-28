import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { NewUserComponent } from './new-user/new-user.component';


const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent,
  }, {
    path: 'new',
    component: NewUserComponent,
    data: { breadcrumb: 'New User'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
