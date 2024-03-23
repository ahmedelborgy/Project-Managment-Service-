import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private _HttpClient:HttpClient) { }
  getManagerProjects(): Observable<any> {
    return this._HttpClient.get('Project/manager/', { params: { pageSize: 10000, pageNumber: 1 } })
    
  }
  getAllUsers(): Observable<any> {
    return this._HttpClient.get('Users/', { params: { pageSize: 10000, pageNumber: 1 ,group:2 } })
    
  }
}
