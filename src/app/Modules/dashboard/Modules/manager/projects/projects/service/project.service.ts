import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _HttpClient:HttpClient) {}
  
  getAllProjects():Observable<any>{
    return this._HttpClient.get('Project/')
  }
}
