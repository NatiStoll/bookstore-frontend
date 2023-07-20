import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './components/list-user/list-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [ListUserComponent, CreateUserComponent],
  imports: [UsersRoutingModule,
    CommonModule,
  MaterialModule],

  exports:[ListUserComponent, CreateUserComponent]
})
export class UsersModule {}
