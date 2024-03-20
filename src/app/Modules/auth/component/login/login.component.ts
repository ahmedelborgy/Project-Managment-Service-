import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Validators,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private _AuthService:AuthService, private _Router:Router){}
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
   
    },complete:()=>{
     
      this._Router.navigateByUrl('/dashboard')
    }, 
  },
  )
  }
  ngOnInit(): void {
    
  }
}
