import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient) { }
  getUsers(param:any):Observable<any>{
    return this._HttpClient.get('Users/',{params:param}) 
  }
  onToggleActivaUser(id:number):Observable<any>{
  return this._HttpClient.put(`Users/${id}`,{})
  }
}
