import { TasksService } from './../../services/tasks.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  
  tableTask:any;
  managerTasks:any[]=[]
  constructor(private _TasksService:TasksService, private _Router:Router){}
  ngOnInit(): void {
    this.getManagerTasks()
  }
  getManagerTasks() {
    let paramData = {
      pageSize: 10,
      pageNumber:1
  }
  this._TasksService.getManagerTasks(paramData).subscribe({
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

}
