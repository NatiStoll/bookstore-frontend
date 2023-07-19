import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './components/list-user/list-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [ListUserComponent, CreateUserComponent],
  imports: [CommonModule],
})
export class UsersModule {}
