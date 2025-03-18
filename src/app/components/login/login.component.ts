import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { strongpasswordValidation } from 'src/app/Validators/custom-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  hide:boolean =true;
  

  constructor(private fb:FormBuilder) { 
    this.loginform = this.fb.group({ 
      id:[''],
      mail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(7),strongpasswordValidation]]
    })
  }


  ngOnInit(): void {
  }
  onSubmit(){ 

  }

}
