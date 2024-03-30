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
      title:'',
      status:'',
      pageSize:10,
      pageNumber:1
    }
   /* this._EmployeeTasksService.getAllTasks(params).subscribe({
      next:(res)=>{
        console.log(res)
        this.taskData=res;
        this.taskList=res.data;
        this.todo=this.taskList.filter((elem:any)=>{


          return elem?.status=='ToDo';
              });
       
        console.log(this.todo)
        this.inPrograss=this.taskList.filter((elem:any)=>{


          return elem?.status=='InPrograss';
              });
        this.Done=this.taskList.filter((elem:any)=>{


          return elem?.status=='Done';
              });

      }
    })*/
    this._EmployeeTasksService.getAllTasks(params).subscribe({
      next:(res) => {
        for (let task of res.data) {
          if (task.status == 'ToDo') {
            this.todo.push(task)
          } else if (task.status == 'InProgress') {
            this.inPrograss.push(task)
          } else {
            this.Done.push(task)
          }
        }
      }
  })
}

  drop(event: CdkDragDrop<string[]>) {
    this._EmployeeTasksService.changeStatus(event.item.data, event.container.id).subscribe({
      next: (res) => {
      }
    })
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }
  }

  /*  moveItemInArray(this.items, event.previousIndex, event.currentIndex);
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
      let status = '';
      if (event.container.id === 'todo') {
        status = 'ToDo';
      } else if (event.container.id === 'inPrograss') {
        status = 'InProgress';
      } else if (event.container.id === 'Done') {
        status = 'Done';
      }
      console.log(event.container.id );
      console.log(status);
      const movedItem: any = event.item.data;
    console.log('Moved item:', movedItem);
      this.changStatusTask(movedItem.id,status)
    }
  }


changStatusTask(idTask:any,statusTask:any){

this._EmployeeTasksService.changeStatus(idTask,statusTask).subscribe({
  next:(res)=>{
    console.log(res);

  },
  error:(err)=>{
    console.log(err)
  },
  complete:()=>{
    this._Toastr.success('Sucsess','Task Moved')
    this.openAllTasks()
  }
    }
)
     
    }
  
  /*  changeStatusTask(task:any, taskId:any){
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
    }*/
  }
