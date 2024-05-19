import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/core/helper-services/helper.service';
import { TasksService } from '../services/tasks.service';
import { ITask } from '../../models/itask';

@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.scss']
})
export class AddEditTasksComponent {
  taskId: number = 0;
  projects:  ITask | any;
  taskData: ITask[]=[];
  users: any[] = [];
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;


  constructor(
    private _TasksService: TasksService,
    private _Router: Router,
    private _HelperService: HelperService,
    private _Toastr: ToastrService,
    private _ActivatedRoute: ActivatedRoute,
  ) {

 
   // console.log(_ActivatedRoute.snapshot.params);
    // console.log(_ActivatedRoute.snapshot.params['id']);
    this.taskId = _ActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
   
     this.getListManagerProjects();
    this.getListUsers(); 
    if (this.taskId > 0) {
      this.getTaskById(this.taskId);
    }
  }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.users.filter(option => option.toLowerCase().includes(filterValue));
  // }

   taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    employeeId: new FormControl(''),
    projectId: new FormControl(''),
  });

 onSubmitTask(data: FormGroup) {
  if (this.taskId) {
    this.editTask(data);
  } else {
    this.addTask(data);
  }
    console.log(data);
    // this._TasksService.onAddTask(data.value).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.projects = res;
    //     console.log(this.projects)
    //   },
    //   error: () => {},
    //   complete: () => {
    //     this._Router.navigate(['/dashboard/manager/tasks']);
    //     this._Toastr.success('Add Successfully');
    //   },
    // });
  }
  addTask(data: any) {
    this._TasksService.onAddTask(data.value).subscribe({
      next: (res) => {
     console.log(res);
       this.projects = res;
      },
      error: (err) => {
       console.log(err);
     },
     complete: () => {
        this._Toastr.success('Add Successfully');
        this._Router.navigate(['/dashboard/manager/tasks']);
      },
    });
  }
  
editTask(data: any) {
  data.value.id = this.taskId;
    this._TasksService.onEditTask(this.taskId, data.value).subscribe({
      next: (res) => {
       console.log(res);
        this.projects = res;
        console.log(this.projects)
       },
       error: (err) => {
       console.log(err);
       },
       complete: () => {
       this._Toastr.success('updated Successfully');
         this._Router.navigate(['/dashboard/manager/tasks']);
     },
     });
   }
 getTaskById(taskId: number) {

    this._TasksService.onGetTaskById(taskId).subscribe({
      next: (res) => {
        console.log(res);
        this.projects = res;
        console.log(this.projects)
        
        this.taskForm.get('projectId')?.disable();
          this.taskForm.patchValue({
            
            title: this.projects.title,
            description: this.projects.description,
             employeeId: this.projects.employeeId,
             projectId: this.projects.projectId,
            
          });
          //this.taskForm.get('projectId')?.disable();
      },
      error: () => {},
      complete: () => {
     
       

    
         }
      })
 
  }

  getListManagerProjects() {
    this._HelperService.getManagerProjects().subscribe({
      next: (res) => {
        console.log(res);
        this.projects = res.data;
      },
      error: () => {},
      complete: () => {},
    });
  }
  getListUsers() {
    this._HelperService.getAllUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.users = res.data;
      },
      error: () => {},
      complete: () => {
        //toster
      },
    });
  }
}
