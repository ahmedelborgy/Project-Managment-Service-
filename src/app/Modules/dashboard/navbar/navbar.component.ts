import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService:AuthService){}
  ngOnInit(): void {
    
  }
  userName=localStorage.getItem('userName');
 // email=localStorage.getItem('Email')
  myLogout(){
    this._AuthService.logOut()
  }
}
