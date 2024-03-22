import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
