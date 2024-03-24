import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private _AuthService:AuthService, private _Router:Router, private _Toastr:ToastrService){}
  ngOnInit(): void {
    
  }
forgetPasswordForm = new FormGroup({
  email:new FormControl(null,[Validators.required])
})
onSubmit(data:FormGroup){
  console.log(data)
  this._AuthService.forgetPassword(data.value).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(err)=>{
      console.log(err)
      this._Toastr.error('Email is Not Valid Please Try Aagin')
    },
    complete:()=>{
      this._Toastr.success('Send OTP, Please Check your Email')
    }
  })
}
}
