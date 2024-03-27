import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksUserComponent } from './tasks-user/tasks-user/tasks-user.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    TasksUserComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    DragDropModule
  ]
})
export class TasksModule { }
