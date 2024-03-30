import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeTasksService {

  constructor(private _HttpClient:HttpClient){}
  getAllTasks(params:any):Observable<any>{
    return this._HttpClient.get('Task',{params:params})
  }
  changeStatus(id: number, status: string): Observable<any> {
    return this._HttpClient.put(`Task/${id}/change-status`, { "status": status })
  }
}

