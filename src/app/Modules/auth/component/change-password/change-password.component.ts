import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  constructor(private _AuthService:AuthService,private _Toastr:ToastrService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  hide:boolean=true;
  hiden:boolean=true;
  hidePass:boolean=true;

  changeForm=new FormGroup({
    oldPassword:new FormControl(null),
    newPassword:new FormControl(null),
    confirmNewPassword:new FormControl(null),

  })
  onSubmit(data:FormGroup){
    this._AuthService.ChangePassword(data.value).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        this._Toastr.success("Success","ChangedPassword Successfuly")
      }
    })
  }
  

  






}
