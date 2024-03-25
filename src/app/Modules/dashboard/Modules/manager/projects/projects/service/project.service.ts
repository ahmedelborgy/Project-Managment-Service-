import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproject } from '../../../interface/iproject';

//import { Iproject } from '../interfac/iproject';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
itemProject:any;
action:string|any;
  constructor(private _HttpClient:HttpClient) {}
  getUsers(params:any):Observable<any>{
    return this._HttpClient.get('Users/',{params}) 
  }
  getAllProjects(param:any):Observable<any>{
    return this._HttpClient.get('Project/',{params:param});
   

  }

  addProjects(data:any):Observable<any>{
    return this._HttpClient.post(`Project`,data)
  }
  
  editProjects(data:any,id:any):Observable<any>{
    //console.log('put',id);
    
    return this._HttpClient.put(`Project/${id}`,data)
  }
  deletProject(id:number):Observable<any>{
  return this._HttpClient.delete(`Project/${id}`);
  }
  getItemProject(item:Iproject,action:string){
  console.log(item,action);
  this.itemProject=item;
  this.action=action;
  }
}
//import { Observable } from 'rxjs/internal/Observable';


