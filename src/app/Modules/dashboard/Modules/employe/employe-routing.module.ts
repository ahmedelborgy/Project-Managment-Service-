import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe.component';
import { HomeComponent } from '../../components/home/home.component';

const routes: Routes = [{ path: '', component: EmployeComponent },
{ path: 'home', component: HomeComponent },
{
  path: 'projects-user',
  loadChildren: () => import('../employe/projects/projects.module').then(m =>m.ProjectsModule)
}, 
{
  path: '',
  loadChildren: () => import('../employe/tasks/tasks.module').then(m =>m.TasksModule)
}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
