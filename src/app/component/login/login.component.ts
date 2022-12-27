import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: any;

  constructor(  private fb: FormBuilder , private router:Router, public spinner:NgxSpinnerService ,
    private auth :AuthService)
  {
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      // OTP : ['' , Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submit(value:any) {
    console.log(this.loginform.value)
  }

  Login(loginform:FormGroup) {

    console.log(loginform.value);
 
 
this.auth.login(loginform.value).subscribe(
(res:any) =>{

  if(res){
    this.router.navigate(['writing-tool']);
  }
  localStorage.setItem('token', res.data.token);

})
  

  }
 

}
