import { Component, inject } from '@angular/core';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';
import { Subscription } from 'rxjs';
import { GetClientesUseCases } from '../../../../../../../../domain/useCase/get-clientes-use-case';
import { GetTipoEmpleadosUseCases } from '../../../../../../../../domain/useCase/get-empleado-use-case';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';
import { rolUsuarioModel } from '../../../../../../../../domain/models/rol-usuario/rol-usaurio.model';
import { GetRolUsuarioUseCases } from '../../../../../../../../domain/useCase/get-rol-usuario-use-case';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { usuarioModel } from '../../../../../../../../domain/models/usuario/usuario.model';
import { CommonModule } from '@angular/common';
import { GetUsuariosUseCases } from '../../../../../../../../domain/useCase/get-usuarios-use-case';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-registro-datos-usuario-page',
    templateUrl: './registro-datos-usuario-page.component.html',
    styleUrls: ['./registro-datos-usuario-page.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class RegistroDatosUsuarioPageComponent {

  usuarios: usuarioModel = new usuarioModel();
  formularioRegistro: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.obtenerClientesExito()
    this.obtenerEmpleadosExito()
    this.obtenerRolesExito()

    this.formularioRegistro = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      rol: new FormControl('', [

      ]),
      idcliente: new FormControl('', [

      ]),
      idempleado: new FormControl('', [

      ])
    });
  }


  private _getClientesUseCase = inject(GetClientesUseCases);

  datosClienteslista: Array<clienteModel> = [];
  private clientesSubscription: Subscription | undefined;
  obtenerClientesExito(): void {
    this.clientesSubscription = this._getClientesUseCase.getAllClientes().
      subscribe((Response: clienteModel[]) => {
        this.datosClienteslista = Response;
      })
  }



  constructor(
    private _getEmpleadosUseCase: GetTipoEmpleadosUseCases,
    private _getRolUsuariosnUseCase: GetRolUsuarioUseCases,
    private _postUsuariosUseCase: GetUsuariosUseCases
  ) { }

  //================================================================
  // Función para obtener los empleados
  //================================================================

  datosEmpleadoslista: Array<empleadoModel> = [];
  private empleadosSubscription: Subscription | undefined;
  obtenerEmpleadosExito(): void {
    this.empleadosSubscription = this._getEmpleadosUseCase
      .getAllEmpleados()
      .subscribe((Response: empleadoModel[]) => {
        this.datosEmpleadoslista = Response;
      })
  }


  //================================================================
  // Función para obtener los roles
  //================================================================

  datosRolUsuarioslista: Array <rolUsuarioModel> = [];
  private rolesSubscription: Subscription | undefined;
  obtenerRolesExito(): void {
    this.rolesSubscription = this._getRolUsuariosnUseCase
    .getAllRolUsuarios().
    subscribe( Response => {
        this.datosRolUsuarioslista = Response;
      })
  }

  public sendUsuarios(): void {
    const formValue = this.usuarios
    console.log(formValue);

    this._postUsuariosUseCase
      .newUsuarios(formValue)
      .subscribe((response: any) => {
        this.mensajeValidacionRegistroCorrecto(response);
      });
  }

  tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Usuario creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaClientes();
    });
  }


  regresarListaClientes() {
    window.location.reload();
  }

  ngOnDestroy(): void {
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
    }

    if (this.empleadosSubscription) {
      this.empleadosSubscription.unsubscribe();
    }

    if (this.rolesSubscription) {
      this.rolesSubscription.unsubscribe();
    }
  }
}
