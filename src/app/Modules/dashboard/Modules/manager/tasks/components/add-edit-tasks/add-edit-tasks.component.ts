import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/core/helper-services/helper.service';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.scss']
})
export class AddEditTasksComponent {
  projects: any[] = [];
  tasks: any[] = [];
  users: any[] = [];
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  constructor(
    private _TasksService: TasksService,
    private _Router: Router,
    private _HelperService: HelperService
  ) {}
  ngOnInit(): void {
   
     this.getListManagerProjects();
     this.getListUsers(); 
  }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.users.filter(option => option.toLowerCase().includes(filterValue));
  // }

  taskForm = new FormGroup({
    title: new FormControl(null),
    description: new FormControl(null),
    employeeId: new FormControl(null),
    projectId: new FormControl(null),
  });

  onSubmitTask(data: FormGroup) {
    console.log(data);
    this._TasksService.onAddTasks(data.value).subscribe({
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
