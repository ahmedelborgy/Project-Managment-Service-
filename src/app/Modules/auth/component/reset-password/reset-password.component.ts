import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{
hide=true;
hiden=true;
constructor(private _AuthService:AuthService,private _Router:Router,private _Toastr:ToastrService){}
resetForm=new FormGroup({
  email:new FormControl(null,[Validators.required]),
  seed:new FormControl(null,[Validators.required]),
  password:new FormControl(null,[Validators.required]),
  confirmPassword:new FormControl(null,[Validators.required])
})
onSubmit(data:FormGroup){
  this._AuthService.resetPassword(data.value).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
      this._Toastr.error('Try again', 'Reset Password not Working')
    },
    complete:()=>{
      this._Toastr.success('Success','Password has been updated successfully')
    }
  })

}
ngOnInit(): void {
  
}
}
