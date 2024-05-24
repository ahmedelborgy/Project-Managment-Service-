import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hiden:boolean=true;
  constructor(private _Toastr:ToastrService,private _AuthService:AuthService, private _Router:Router){}
  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')])
  })
  onSubmit(data:FormGroup){
  console.log(data)
  this._AuthService.userLogin(data.value).subscribe(
   {
    next:(res)=>{    
      console.log(res);
      localStorage.setItem('userToken', res.token)
      this._AuthService.getProfile();
    },error:(err:any)=>{
      console.log(err)
      this._Toastr.error('Try again', 'Login not sucess');
    },complete:()=>{
      this._Toastr.success('Successfuly', 'Login sucess');
      this._Router.navigateByUrl('/dashboard')
    }, 
  },
  )
  }
  ngOnInit(): void {
    
  }
}
