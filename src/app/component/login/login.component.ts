import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mailHide = true;
 
  userForm: FormGroup | any;

  constructor(private fb: FormBuilder,) {
    this.userForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    

    });
    console.log('values', this.userForm.values)
    
  }

  ngOnInit(): void {
    this.show_Login();
    localStorage.setItem("email", "Sarmadsyedali@gmail.com");
  }
  show_Login() {
 
    this.mailHide = !this.mailHide;
 
  }

  onSubmit() {
 
    if (this.userForm.invalid) {
      alert('Please fill Form')
    }
    else {
      alert('Sucess')
    }
 
  }
}
