import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { AddEditProjectComponent } from './projects/component/add-edit-project/add-edit-project.component';
import { DeletProjectComponent } from './projects/component/delet-project/delet-project.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    AddEditProjectComponent,
    DeletProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
  
})
export class ProjectsModule { }
