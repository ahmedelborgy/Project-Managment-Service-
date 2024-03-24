import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AddEditProjectComponent } from './projects/component/add-edit-project/add-edit-project.component';

const routes: Routes = [
  {path:'projects',component:ProjectsComponent},
  {path:'{path:add-edit',component:AddEditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
