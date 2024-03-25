import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/core/helper-services/helper.service';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.scss']
})
export class AddEditTasksComponent {

  taskId: number = 0;
  projects: any[] = [];
  taskData: any[] = [];
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
    // this.taskId = _ActivatedRoute.snapshot.params['id'];
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
    title: new FormControl(null,),
    description: new FormControl(null ),
    employeeId: new FormControl(null),
    projectId: new FormControl(null ),
  });

  onSubmitTask(data: FormGroup) {
    console.log(data);
    this._TasksService.onAddTask(data.value).subscribe({
      next: (res) => {
        console.log(res);
        this.projects = res.data;
      },
      error: () => {},
      complete: () => {
        this._Router.navigate(['/dashboard/manager/tasks']);
      },
    });
  }
  // onSubmitTask(data: FormGroup) {
  //   console.log(data.value);
  //   data.value.id = this.taskId;
  //   let myData = new FormData();
  //   myData.append('title', data.value.title);
  //   myData.append('description', data.value.description);
  //   myData.append('employeeId', data.value.employeeId);
  //   myData.append('projectId', data.value.projectId);
 
  

//  if (this.taskId) {
//       myData.append('id', data.value.id);
//       this.editTask(myData);
//   }else {
//        this.addTask(myData);
//    }
//  }




  // addTask(data: any) {
  //   this._TasksService.onAddTask(data).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.projects = res.data;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       this._Toastr.success('Add Successfully');
  //       this._Router.navigate(['/dashboard/manager/tasks']);
  //     },
  //   });
  // }
  // editTask(data: any) {
  //   data.id = this.taskId;
  //   this._TasksService.onEditTask(this.taskId, data).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.projects = res.data;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       this._Toastr.success('Add Successfully');
  //       this._Router.navigate(['/dashboard/manager/tasks']);
  //     },
  //   });
  // }


  getTaskById(id: number) {
    this._TasksService.onGetTaskById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.taskData = res.data;
      },
      error: () => {},
      complete: () => {
     
        this.taskForm.patchValue({
          // title: this.taskData.title,
          // description: this.taskData.description,
          // employeeId: this.taskData.employee.id,
      
        
        })

    
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
