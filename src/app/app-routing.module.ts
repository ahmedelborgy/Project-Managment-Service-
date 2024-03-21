import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Modules/guards/auth.guard';

const routes: Routes = [

  
  {path:'',redirectTo:'auth',pathMatch:'full'},
  
  { path: 'dashboard',canActivate:[AuthGuard], loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule) },

  
  
  { path: 'auth', loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule) }
  
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
