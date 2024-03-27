import { Task } from '../interface/employee-project';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EmpProjectService } from '../service/emp-project.service';
import { IemployeeProject } from '../interface/employee-project';

@Component({
  selector: 'app-projects-user',
  templateUrl: './projects-user.component.html',
  styleUrls: ['./projects-user.component.scss']
})
export class ProjectsUserComponent implements OnInit {
getProjects() {
throw new Error('Method not implemented.');
}


tableProjects:IemployeeProject[]=[];
tableTasks:Task[]=[];
tasklength:number|any;
Projects:any[]=[];
length=20;
pageSize=5;
pageIndex=0;
pageNumber=1;
pageSizeOptions=[5,10,20];
pageEvent:PageEvent|any;
searchKey:string='';

constructor(
  private _EmpProjectServ:EmpProjectService
){
console.log(this.searchKey);
}


ngOnInit(): void {
  
this.getAllProject();
}

getAllProject(){
console.log(this.searchKey);

  let params={
    pageSize:this.pageSize,
    pageNumber:this.pageNumber,
    title:this.searchKey
  }
  console.log(params);
  
  this._EmpProjectServ.getEmployeeProject(params).subscribe({
next:(res)=>{
  // console.log(res);
  this.tableProjects=res.data;
  console.log(this.tableProjects);
  
},
error:(err)=>{
  console.log(err);
  
},complete:()=>{
 
  
}


  })
}


handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;
 this.getAllProject();
}
}
