import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddEditTasksComponent } from './components/add-edit-tasks/add-edit-tasks.component';

const routes: Routes = [  {
  path: '',
  component: TasksComponent
},
 { path: 'add', component: AddEditTasksComponent },
 { path: 'edit/:id', component: AddEditTasksComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
