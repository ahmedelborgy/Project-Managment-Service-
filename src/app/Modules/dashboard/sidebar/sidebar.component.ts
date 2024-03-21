import { Component } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { Router } from '@angular/router';
interface Menu{
  text:string;
  link:string;
  icon:string;
  isActive:boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _AuthService: AuthService, private _Router:Router) {}
  isManager(): boolean {
    console.log(this._AuthService.role);
    return this._AuthService.role == 'manager'? true : false;
  
  }

  isEmployee(): boolean {
   
    console.log(this._AuthService.role);
    return this._AuthService.role == 'employee'? true : false
    
  }

  Menu: Menu[] = [
    {
      text: 'Home',
      link: '/dashboard/home',
      icon: 'fa-solid fa-house',
      isActive: true
    },
    {
      text: 'Tasks',
      link: '/dashboard/manager/tasks',
      icon: 'fa-solid fa-list-check',
      isActive: true
    },
    {
      text: 'Projects',
      link: '/dashboard/manager/projects',
      icon: 'fa-solid fa-bars-progress',
      isActive: true
    },
    {
      text: 'Users',
      link: '/dashboard/manager/users',
      icon: 'fa-solid fa-users',
      isActive: true
    },
  ]
}
