import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Iproject } from '../../../../interface/iproject';
import { ProjectService } from '../../service/project.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss']
})
export class AddEditProjectComponent  implements OnInit {
  isInputDisabled:boolean=true;
  itemProject:Iproject | undefined;
  editid:any;
  action=localStorage.getItem('action');
  is_title:string |any='';
  is_description:string |any='';

  constructor(private _ProjectService:ProjectService,private _Router:Router,private _Toaster:ToastrService){
this.itemProject=this._ProjectService.itemProject;
this.editid=this.itemProject?.id;
this.is_title=this.itemProject?.title;
this.is_description=this.itemProject?.description;
console.log(this.itemProject,this.action);


    }
    ngOnInit(): void {
      if(localStorage.getItem('action')=='add New'){
        this.is_title=''
        this.is_description=''
      }
   
    }
  
  addProjectForm=new FormGroup({
  title: new FormControl(null),
  description:new FormControl(null)
})
// addEditProject(data:FormGroup){
//   console.log(data);
  
// }
addEditProject(addProjectForm:FormGroup){
 console.log(this.itemProject);
 

if(this.itemProject=undefined){
  this.addProject(addProjectForm);
}
else{
  this.editProject(addProjectForm)
}





}
addProject(addProjectForm:FormGroup){
  console.log('add');
  
  this._ProjectService.addProjects(addProjectForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      
    },
    error:(err)=>{
    console.log(err);
     this._Toaster.error('Added project Successfuly')
    },
    complete:()=> {
      this._Toaster.success('Added Task Successfully')
      this._Router.navigate(['/dashboard/manager/projects'])
      
    },
  })
}


editProject(addProjectForm:FormGroup){
  console.log(this.editid);
  
  
  this._ProjectService.editProjects(addProjectForm.value,this.editid).subscribe({
    next:(res)=>{
      console.log(res);
      
    },
    error:(err)=>{
   console.log(err);
   this._Toaster.error('Task Not Added')
    },
    complete:()=> {
      this._Toaster.success('Edited Task Successfully')
      this._Router.navigate(['/dashboard/manager/projects'])
      
    },
  })
}


}
