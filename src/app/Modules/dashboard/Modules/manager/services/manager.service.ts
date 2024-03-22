import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private _HttpClient:HttpClient) {}
  getUsers(params:any):Observable<any>{
    return this._HttpClient.get('Users/',{params}) 
  }
  getAllProjects():Observable<any>{
    return this._HttpClient.get('Project/')
  }
}
