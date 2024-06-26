import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService  {
 
  role:string|any='';
  constructor(private _HttpClient:HttpClient, private _Router:Router){
     
      if(localStorage.getItem('userToken')!==null){
      this.getProfile()
     }
  }
 
  //token= localStorage.getItem('userToken');
  getProfile(){
    let encoded:any=localStorage.getItem('userToken');
    let decoded:any=jwtDecode(encoded);
    localStorage.setItem('userRole',decoded.userGroup);
    localStorage.setItem('userName',decoded.userName);
    localStorage.setItem('userEmail',decoded.userEmail)
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
   verifyUser(data:any):Observable<any>{
    return this._HttpClient.put('Users/verify',data)
   }
   forgetPassword(data:any):Observable<any>{
    return this._HttpClient.post('Users/Reset/Request',data)
   }
   resetPassword(data:any):Observable<any>{
    return this._HttpClient.post('Users/Reset',data)
   }

  ChangePassword(data:any):Observable<any>{
   return this._HttpClient.put('Users/ChangePassword',data)
   }
   profileUser(data:any):Observable<any>{
    return this._HttpClient.put('Users/',data)
   }
   getCurrentUser():Observable<any>{
    return this._HttpClient.get('Users/currentUser')
   }

   logOut(){
    /* localStorage.removeItem('userName');
     localStorage.removeItem('userRole');
     localStorage.removeItem('userToken');*/
     this._Router.navigateByUrl('/auth/login')
     localStorage.clear()
}
}
