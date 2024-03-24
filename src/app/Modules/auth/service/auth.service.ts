import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
 
  role:string|any='';
  constructor(private _HttpClient:HttpClient, private _Router:Router){
     
      if(localStorage.getItem('userToken')!==null){
      this.getProfile()
     }
  }
  ngOnInit(): void {
    
  }
 
  //token= localStorage.getItem('userToken');
  getProfile(){
    let encoded:any=localStorage.getItem('userToken');
    let decoded:any=jwtDecode(encoded);
    localStorage.setItem('userRole',decoded.userGroup);
    localStorage.setItem('userName',decoded.userName);
   this.getRole()
   // console.log(decoded)
  }
  getRole(){
    if(localStorage.getItem('userToken')!==null&&(localStorage.getItem('userRole')!==null)){
     this.role=localStorage.getItem('userRole')
    console.log(this.role);
    }
  }
  userLogin(data:any):Observable<any>{
    return this._HttpClient.post('Users/Login',data)
   }
   userRegister(data:any):Observable<any>{
    return this._HttpClient.post('Users/Register',data)
   }
   logOut(){
    /* localStorage.removeItem('userName');
     localStorage.removeItem('userRole');
     localStorage.removeItem('userToken');*/
     this._Router.navigateByUrl('/auth/login')
     localStorage.clear()
}
}
