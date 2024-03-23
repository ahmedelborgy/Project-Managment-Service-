import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ManagerService } from '../../../../services/manager.service';
import { Router } from '@angular/router';
import { Iproject } from '../../../../interfac/iproject';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss']
})
export class AddEditProjectComponent {
  isInputDisabled:boolean=true;
 

  itemProject:Iproject | undefined;
  editid:any;
  action=localStorage.getItem('action');
  is_title:string |any='';
  is_description:string |any='';

  constructor(private _ManagerService:ManagerService,
    private _Router:Router){
  

this.itemProject=this._ManagerService.itemProject;
this.editid=this.itemProject?.id;


this.is_title=this.itemProject?.title;
this.is_description=this.itemProject?.description;
console.log(this.itemProject,this.action);

    }







  addProjectForm=new FormGroup({
  title: new FormControl(null),
  description:new FormControl(null)
})



addEditProject(addProjectForm:FormGroup){
if(addProjectForm.valid){

console.log(this.itemProject);


if(this.itemProject=undefined){
  this.addProject(addProjectForm);
}

else{
  
  this.editProject(addProjectForm)
}
}

}


addProject(addProjectForm:FormGroup){
  console.log('----------add-----------');
  
  this._ManagerService.addProjects(addProjectForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      
    },
    error:(err)=>{
  console.log(err);
  
    },
    complete:()=> {
      console.log('--complet add project---');
      this._Router.navigate(['/dashboard/manager/projects'])
      
    },
  })
}


editProject(addProjectForm:FormGroup){
  console.log(this.editid);
  console.log('------deit-----------');
  
  this._ManagerService.editProjects(addProjectForm.value,this.editid).subscribe({
    next:(res)=>{
      console.log(res);
      
    },
    error:(err)=>{
  console.log(err);
  
    },
    complete:()=> {
      console.log('--complet edit project---');
      this._Router.navigate(['/dashboard/manager/projects'])
      
    },
  })
}


}
