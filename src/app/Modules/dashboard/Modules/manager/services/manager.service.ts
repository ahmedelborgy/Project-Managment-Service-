import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproject } from '../interfac/iproject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class ManagerService {

//   constructor() { }
// }
export class ManagerService {
  itemProject:Iproject|any;
  action:string|any;
    constructor(private _HttpClient:HttpClient) {}
    getUsers(params:any):Observable<any>{
      return this._HttpClient.get('Users/',{params}) 
    }
    getAllProjects(data:any):Observable<any>{
      return this._HttpClient.get('Project/',{params:data});
     
  
    }
  
    addProjects(data:any):Observable<any>{
      return this._HttpClient.post(`Project`,data)
    }
    
    editProjects(data:any,id:any):Observable<any>{
      console.log('---put---',id);
      
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
  