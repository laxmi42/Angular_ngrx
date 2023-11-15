import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { loginStart } from '../state/auth.action';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(public formBuilder:FormBuilder, public store:Store<AppState>) { }

  ngOnInit(): void {
   this.createForm()
  }
  createForm(){
    this.loginForm = this.formBuilder.group({

      email:  new FormControl(['',[Validators.required,Validators.email],]),
      password: new FormControl(['',
        [Validators.required],])
      
    });
  }
  get f() { return this.loginForm.controls; }
  onLoginSubmit(){
   console.log(this.loginForm.value);
   let email=this.loginForm.value.email
   let password=this.loginForm.value.password
   this.store.dispatch(loginStart({email,password}),)
   this.store.dispatch(setLoadingSpinner({status:true}))
    
  }
}
