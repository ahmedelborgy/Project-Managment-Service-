import { Component, OnInit } from '@angular/core';
import { EmployeeTasksService } from '../../../service/employee-tasks.service';
import { ToastrService } from 'ngx-toastr';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem}from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-tasks-user',
  templateUrl: './tasks-user.component.html',
  styleUrls: ['./tasks-user.component.scss']
})
export class TasksUserComponent implements OnInit {
  items: any[] = [];
  constructor(private _EmployeeTasksService:EmployeeTasksService, private _Toastr:ToastrService){}
  ngOnInit(): void {
    this.openAllTasks()
  
  }
  todo:any[]=[]
  inPrograss:any[]=[]
  Done:any[]=[]
  taskData:any[]=[]
  taskList:any[]=[]
  openAllTasks(){
    let params={
      
    }
    this._EmployeeTasksService.getAllTasks(params).subscribe({
      next:(res)=>{
        console.log(res)
        this.taskData=res;
        this.taskList=res.data;
        this.todo=this.taskList.filter(x=>x.status=='ToDo');
       
        console.log(this.todo)
        this.inPrograss=this.taskList.filter(x=>x.status=='InProgress')
        this.Done=this.taskList.filter(x=>x.status=='Done')
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(event)
  console.log(event.container.data)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const taskId = event.container.data[event.currentIndex];
    
    // Call changeStatus method to update the status of the moved task
    this.changeStatusTask(event.container.data[event.currentIndex], taskId);
   
    }
  
     
    }
    changeStatusTask(task:any, taskId:any){
      this._EmployeeTasksService.changeStatus(task,taskId).subscribe({
        next:(res)=>{
          console.log(res)
        },
        error:(err)=>{
          console.log(err)
        },
        complete:()=>{
          this._Toastr.success('Sucsess','Task Moved')
          this.openAllTasks()
        }
      })
    }
  }
