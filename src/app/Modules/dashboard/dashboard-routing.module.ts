import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ManagerGuard } from '../guards/manager.guard';
import { EmployeeGuard } from '../guards/employee.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'Employe',
        canActivate:[EmployeeGuard],
        loadChildren: () =>
          import('./Modules/employe/employe.module').then(
            (m) => m.EmployeModule
          ),
      },
      {
        path: 'manager',
        canActivate:[ManagerGuard],
        loadChildren: () =>
          import('./Modules/manager/manager.module').then(
            (m) => m.ManagerModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class DashboardRoutingModule { }
