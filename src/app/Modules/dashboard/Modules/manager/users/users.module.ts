import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { ConfirmUserComponent } from './components/confirm-user/confirm-user/confirm-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    ConfirmUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
