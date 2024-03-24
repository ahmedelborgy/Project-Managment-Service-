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
  onAddTasks(data: FormGroup): Observable<any>{
    return this._HttpClient.post('Task/',data)
    
  }
  onDeleteTask(id:number): Observable<any>{
    return this._HttpClient.delete(`Task/${id}`)
    
  }
}
