import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { ConfirmUserComponent } from './components/confirm-user/confirm-user/confirm-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    UsersComponent,
    ConfirmUserComponent,
    ViewUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatSelectModule
  ]
})
export class UsersModule { }
