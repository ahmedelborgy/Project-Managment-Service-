import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { AddEditProjectComponent } from './projects/component/add-edit-project/add-edit-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteProjectComponent } from './projects/component/add-edit-project/delete-project/delete-project.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    AddEditProjectComponent,
    DeleteProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProjectsModule { }
