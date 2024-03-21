import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';

const routes: Routes = [{ path: '', component: ManagerComponent },
{
  path: '',
  loadChildren: () => import('../manager/users/users.module').then(m =>m.UsersModule)
}, 
{
  path: '',
  loadChildren: () => import('../manager/projects/projects.module').then(m =>m.ProjectsModule)
},
{
  path: '',
  loadChildren: () => import('../manager/tasks/tasks.module').then(m =>m.TasksModule)
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
