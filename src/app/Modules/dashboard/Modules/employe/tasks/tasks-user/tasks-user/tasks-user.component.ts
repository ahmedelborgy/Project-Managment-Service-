import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { CdkDrag, CdkDragDrop, CdkDropList,
   moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {

  CdkDragMove,

  CdkDropListGroup,

} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-tasks-user',
  templateUrl: './tasks-user.component.html',
  styleUrls: ['./tasks-user.component.scss'],
  
})
export class TasksUserComponent implements OnInit {
  tableToDo:any=[];
  data:any=[];
tableInProgress:any=[]
   tableDone:any=[]

  constructor(
    private _TasksServ:TasksService,



  ){
    
  }
ngOnInit(): void {
  this.getTasks();
}

getTasks(){
  let prame={
    title:'',
    status:'',
    pageSize:10,
    pageNumber:1
  }
this._TasksServ.getAllTasks(prame).subscribe({
  next:(res)=> {
    console.log(res);
    this.data=res.data;
    this.tableToDo=this.data.filter((elem:any)=>{
      
      
return elem?.status=='ToDo';
    });
    this.tableInProgress=this.data.filter((elem:any)=>{
      
      
      return elem?.status=='InProgress';
          });
          this.tableDone=this.data.filter((elem:any)=>{
      
      
            return elem?.status=='Done';
                });
      


  },
  error:(err)=> {
    console.log(err);
    
  },
  complete:()=> {
    console.log('---------complet task--------');
    console.log(this.tableToDo);
    console.log(this.tableInProgress);
    console.log(this.tableDone);
    
    
    
  },

})

}











// todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

//   done1 = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    console.log(event.container.data);
    
    
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
      if (event.container.id === 'tableToDo') {
        status = 'ToDo';
      } else if (event.container.id === 'tableInProgress') {
        status = 'InProgress';
      } else if (event.container.id === 'tableDone') {
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

this._TasksServ.changeStatus(idTask,statusTask).subscribe({
  next:(res)=>{
    console.log(res);
    
  },

  error:(err)=>{
    console.log(err);
    
  },
  complete:()=>{
    this.getTasks();
    console.log('comp change');
    
  }
})

}














}
