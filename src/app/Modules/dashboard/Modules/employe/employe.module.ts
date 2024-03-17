import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { EmployeComponent } from './employe.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';


@NgModule({
  declarations: [
    EmployeComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    SharedModule
  ]
})
export class EmployeModule { }
