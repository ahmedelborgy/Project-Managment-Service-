import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksUserComponent } from './tasks-user/tasks-user/tasks-user.component';


@NgModule({
  declarations: [
    TasksUserComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
