import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksUserComponent } from './tasks-user/tasks-user/tasks-user.component';

const routes: Routes = 
[{path:'tasks-user',component:TasksUserComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
