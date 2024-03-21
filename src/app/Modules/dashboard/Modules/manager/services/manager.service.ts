import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private _HttpClient:HttpClient) {}
  getUsers():Observable<any>{
    return this._HttpClient.get('Users/currentUser') 
  }
}
