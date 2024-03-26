import { ToastrService } from 'ngx-toastr';
import { TasksService } from '../services/tasks.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/Modules/shared/delete/delete.component';
import { CardTaskComponent } from '../card-task/card-task.component';
import { DeleteProjectComponent } from '../../../projects/projects/component/delete-project/delete-project.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  searchKey: string='';
  tableTask: any;
  managerTasks: any[] = [];
  length = 20;
  pageSize = 5;
  pageIndex = 0;
  pageNumber = 1;
  pageSizeOptions = [5, 10, 20];
  pageEvent: PageEvent | any;

  
  constructor(private _TasksService: TasksService,
    private _Router: Router,
    private _Toastr:ToastrService,
    public _Dialog: MatDialog,) { }
  
  
  ngOnInit(): void {
    this.getManagerTasks();
  }

  getManagerTasks() {
    let params = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      title:this.searchKey
    };
    this._TasksService.getManagerTasks(params).subscribe({
      next: (res) => {
        console.log(res);
        this.tableTask = res;
        this.managerTasks = res.data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getManagerTasks();
  }


  /*openDeleteTaskDialog(item:any) {
    console.log(item);

    const dialogRef = this._Dialog.open(DeleteComponent, {
      data: {isData:item},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      //  let x = {name:result}
      if (result) {
        this.deleteTask(result);
      }
    });
  }*/
  openDialog(item:any): void {
    const dialogRef = this._Dialog.open(DeleteProjectComponent, {
      data: {isData:item},
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed',result);
      console.log(result);
      if(result){
       this.deletProject(result)
      }
    });
  }
  
  deletProject(id:any){
  this._TasksService.onDeleteTask(id).subscribe({
    next:(res)=> {
      console.log(res);
      
    },
    error:(err)=> {
      console.log(err);
      
    }, 
    complete:()=> {
      //console.log('complet delete');
      this.getManagerTasks();
    },
  })
  }


  openViewTaskDialog(taskData:any) {
    console.log(taskData);

    const dialogRef = this._Dialog.open(CardTaskComponent, {
      data: taskData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      //  let x = {name:result}
      if (result) {
        this.getTaskById(result);
      }
    });
  }
  getTaskById(taskId: any) {
    this._TasksService.onGetTaskById(taskId).subscribe({
      next:(res) => {
          console.log(res);
          
      }

    }
     
    )
    
  }
 /* deleteTask(taskId: any) {
    this._TasksService.onGetTaskById(taskId).subscribe({
      next: (res) => {
        console.log(res);
       this._Toastr.success('Task', ' deleted Task Success');
      },
      error: (err) => {
        console.log(err);
       this._Toastr.error('Task', ' deleted Task Field');
      },
      complete: () => {
        this.getManagerTasks();
      },
    });
  }
*/
 
}
