import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpProjectService {

  constructor(private http:HttpClient) { }


getEmployeeProject(data:any):Observable<any>{
return this.http.get(`Project/employee?`,{params:data})








}


}