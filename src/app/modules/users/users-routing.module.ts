import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';


const routes: Routes = [
  {
    path: '',
    component: ListUserComponent,
  },
  {
    path: 'create',
    component: CreateUserComponent,
  },
  {
    path: 'edit/:id',
    component: CreateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
