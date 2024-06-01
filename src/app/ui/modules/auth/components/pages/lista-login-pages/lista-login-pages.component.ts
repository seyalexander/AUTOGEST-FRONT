import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../../../infraestrcuture/driven-adapter/login/auth.service';
import { LoginRequest } from '../../../../../../domain/models/login/login-request';


@Component({
  selector: 'app-lista-login-pages',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './lista-login-pages.component.html',
  styleUrls: ['./lista-login-pages.component.css']
})
export class ListaLoginPagesComponent implements OnInit {
  loginError: string = "";
  userNombre: String = ''
  userLoginOn: boolean = false;
  userLoginId: number = 0;
  ingreso: boolean = true
  mensaje: string = 'Credenciales incorrectas'
  contadorVecesIngresos: number = 0
  bloqueado: boolean = false

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: AuthService) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      this.loginError = "";
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData: any) => {
          this.loginService.currentUserLoginOn.subscribe({
            next: (userLoginOn) => {
              this.userLoginOn = userLoginOn
              if (userLoginOn == true) {
                this.loginService.currentUserIdEmpleado.subscribe({
                  next: (userLoginId) => {
                    this.userLoginId = userLoginId
                    if (userLoginId > 0) {
                      this.router.navigateByUrl('/home');
                      this.loginForm.reset();
                      this.ingreso = true
                    } else {
                      this.router.navigateByUrl('/');
                      this.ingreso = false
                      this.loginForm.reset();
                      this.mensaje = 'Credenciales incorrectas'
                      this.contadorVecesIngresos += 1
                      if (this.contadorVecesIngresos >= 3) {
                        this.mensaje = 'Haz intentado muchas veces, comunícate con el administrador'
                        this.bloqueado = true
                      }

                    }
                  }
                })
              }
            }
          })

        },
        error: (errorData: any) => {
          console.error(errorData);
          this.loginError = errorData;
          this.mensaje = errorData
          this.ingreso = false
          this.contadorVecesIngresos += 1
          if (this.contadorVecesIngresos >= 3) {
            this.mensaje = 'Haz intentado muchas veces, comunícate con el administrador'
          }
        },
      })

    }
    else {
      this.loginForm.markAllAsTouched();
      this.ingreso = false
      this.mensaje = 'Ingrese las credenciales por favor'
      // alert("Error al ingresar los datos.");
    }
  }

  mostrar: boolean = false
  showMensaje() {
    this.mostrar = true
    window.location.reload()
  }
}
