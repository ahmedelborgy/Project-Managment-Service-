import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksUserComponent } from './tasks-user/tasks-user/tasks-user.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    TasksUserComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    DragDropModule,
    
  ]
})
export class TasksModule { }
