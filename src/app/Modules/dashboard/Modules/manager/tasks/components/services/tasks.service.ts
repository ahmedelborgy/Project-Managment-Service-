import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _HttpClient:HttpClient) { }
  getManagerTasks(param:any):Observable<any>{
    return this._HttpClient.get('Task/manager',{params:param})
  }
  onAddTask(data: FormGroup): Observable<any>{
    return this._HttpClient.post('Task/',data)
    
  }
  onEditTask(id:number,data: FormGroup): Observable<any>{
    return this._HttpClient.put(`Task/${id}`,data)
    
  }
  onDeleteTask(id:number): Observable<any>{
    return this._HttpClient.delete(`Task/${id}`)
    
  }
  onGetTaskById(id:number): Observable<any>{
    return this._HttpClient.get(`Task/${id}`)
    
  }
}
