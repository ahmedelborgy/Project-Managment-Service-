import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimationStyleMetadata } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public HttpClient:HttpClient) { }

getAllTasks(data:any):Observable<any>{

return this.HttpClient.get(`Task?`,{params:data})
}

changeStatus(id:any,status:AnimationStyleMetadata):Observable<any>{
  return this.HttpClient.put(`Task/${id}/change-status`,{status})
}
}