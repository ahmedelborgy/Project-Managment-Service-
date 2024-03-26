import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsUserComponent } from './projects-user/projects-user.component';

const routes: Routes = [
  {path:'',component:ProjectsUserComponent},
  {path:'projects-user',component:ProjectsUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
