import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: any;
  loginError: any;

  constructor( private toastr: ToastrService, private fb: FormBuilder , private router:Router, public spinner:NgxSpinnerService ,
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

    this.spinner.show();
this.auth.login(loginform.value).subscribe(
(res:any) =>{

  this.toastr.success('You are successfully login!');
  if(res){
    this.router.navigate(['writing-tool']);
  }  
  localStorage.setItem('token', res.data.token);

},
(error) => {        
  
  this.toastr.error('Your credentials are not correct');
  
  
  
 
}) 

this.spinner.hide();
this.loginform.reset();
  

  }
 

}
