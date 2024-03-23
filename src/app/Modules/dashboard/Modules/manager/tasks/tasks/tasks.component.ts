import { TasksService } from '../services/tasks.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tableTask:any;
  managerTasks:any[]=[]
  length=20;
  pageSize=5;
  pageIndex=0;
  pageNumber=1;
  pageSizeOptions=[5,10,20];
  pageEvent:PageEvent|any;
  constructor(private _TasksService:TasksService, private _Router:Router){}
  ngOnInit(): void {
    this.getManagerTasks()
  }
  getManagerTasks() {
    let params = {
      pageSize:this.pageSize,
      pageNumber:this.pageNumber,
  }
  this._TasksService.getManagerTasks(params).subscribe({
    next:(res)=>{
      console.log(res)
      this.tableTask=res;
      this.managerTasks=res.data
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
     
    }
  })
}
handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;
  this.getManagerTasks()
}
}
