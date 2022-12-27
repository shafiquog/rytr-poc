import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  Registraionform: any;


  constructor(private fb: FormBuilder  ,private Auth :AuthService  , private route :Router) {
    this.Registraionform = this.fb.group({
      name: ['', Validators.required],
    
      email: ['', [Validators.required, Validators.email]],
      Phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: [   '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]],
  
    });
 
  }

  ngOnInit(): void {
  }

  submit(Registraionform :FormGroup) {

      
this.Auth.register(Registraionform.value).subscribe(
  (res:any) =>{

    this.route.navigate(['/login']);
  }
)


  }
}
