import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';

const routes: Routes = [
  { path: '',redirectTo:'login',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
