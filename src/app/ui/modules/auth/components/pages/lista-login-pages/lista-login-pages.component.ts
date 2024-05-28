import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../../../infraestrcuture/driven-adapter/login/auth.service';
import { LoginRequest } from '../../../../../../domain/models/login/login-request';


@Component({
  selector: 'app-lista-login-pages',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './lista-login-pages.component.html',
  styleUrls: ['./lista-login-pages.component.css']
})
export class ListaLoginPagesComponent implements OnInit {
  loginError:string="";

  loginForm=this.formBuilder.group({
    username:['',[Validators.required]],
    password: ['',Validators.required],
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService: AuthService) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.controls.username;
  }

  get password()
  {
    return this.loginForm.controls.password;
  }

  login(){
    if(this.loginForm.valid){
      this.loginError="";
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData: any) => {
          console.log(userData);
        },
        error: (errorData:any) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/home');
          this.loginForm.reset();
        }
      })

    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }
}
