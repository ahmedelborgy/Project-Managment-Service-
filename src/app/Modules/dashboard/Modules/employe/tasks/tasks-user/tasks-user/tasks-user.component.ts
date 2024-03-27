import { Component, OnInit } from '@angular/core';
import { EmployeeTasksService } from '../../../service/employee-tasks.service';
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
  constructor(private _EmployeeTasksService:EmployeeTasksService){}
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
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
