import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Modules/guards/auth.guard';

const routes: Routes = [

  
  {path:'',redirectTo:'auth',pathMatch:'full'},
  
  { path: 'dashboard', loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule) },

  
  
  { path: 'auth',canActivate:[AuthGuard], loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule) }
  
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
