import { preDiagnosticoModel } from './../../../../../../../../domain/models/preDiagnostico/preDiagnostico.model';
import { autosModel } from './../../../../../../../../domain/models/autos/autos.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { recepcionModel } from '../../../../../../../../domain/models/recepcion/recepcion.model';
import { citasModel } from '../../../../../../../../domain/models/citas/citas.model';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';
import { modeloAutosModel } from '../../../../../../../../domain/models/modelo-autos/modelo-autos.model';
import { marcaAutosModel } from '../../../../../../../../domain/models/marcas-autos/marca-autos.model';
import { choferesModel } from '../../../../../../../../domain/models/choferes/choferes.model';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';
import { AuthService } from '../../../../../../../../infraestrcuture/driven-adapter/login/auth.service';
import { GetPreDiagnosticoUseCase } from '../../../../../../../../domain/useCase/get-preDiagnostico-use-case';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ordenTrabajoModel } from '../../../../../../../../domain/models/orden-trabajo/orden-trabajo.model';
import { GetOrdenTrabajoUseCases } from '../../../../../../../../domain/useCase/get-orden-trabajo-use-case';

@Component({
  selector: 'app-registrar-ingreso',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrar-ingreso.component.html',
  styleUrl: './registrar-ingreso.component.css'
})
export class RegistrarIngresoComponent {
  refresh_token: string = '';
  userNombre: String = ''
  userLoginOn : boolean = false;
  userLoginId : number = 0;
  mensajeRegistro: String = 'Cita creada correctamente'
  mensajeRegistroIncorrecto: String = 'Algo falló en el registro'

  @Input() ingresoSeleccionado: ordenTrabajoModel = {} as ordenTrabajoModel
  @Input() diagnosticoSeleccionado: preDiagnosticoModel = {} as preDiagnosticoModel
  @Input() recepcionSeleccionada: recepcionModel = {} as recepcionModel
  @Input() citaSeleccionada: citasModel = {} as citasModel
  @Input() empleadoSeleccionada: empleadoModel = {} as empleadoModel
  @Input() autoSeleccionada: autosModel = {} as autosModel
  @Input() modeloSeleccionada: modeloAutosModel = {} as modeloAutosModel
  @Input() marcaSeleccionada: marcaAutosModel = {} as marcaAutosModel
  @Input() choferSeleccionada: choferesModel = {} as choferesModel
  @Input() clienteSeleccionada: clienteModel = {} as clienteModel

//============================================================================
  // OCULTAR MODAL DESDE LA PANTALLA DE REGISTRO
  //============================================================================
  @Output() cerrarComponenteEvent = new EventEmitter<void>();
  cerrarComponente(): void {
    this.showRegistro = false;
    this.cerrarComponenteEvent.emit();
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  //============================================================================
  // INYECCION DE SERVICIOS DESDE LOS CASOS DE USO
  //============================================================================
  constructor(
    private _tokenLogin: AuthService,
    private loginService: AuthService,
    private _getDiagnosticoUseCase: GetPreDiagnosticoUseCase,
    private _getIngresoUseCase: GetOrdenTrabajoUseCases,
  ) { }

  ingreso: ordenTrabajoModel = new ordenTrabajoModel();
  formularioRegistro: FormGroup = new FormGroup({});

  //============================================================================
  // FUNCIÓN PRINCIPAL
  //============================================================================

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn = userLoginOn;
        if(this.userLoginOn) {
          this.loginService.currentUserIdClient.subscribe({
            next: (userLoginId) => {
              this.userLoginId = userLoginId
              if(this.userLoginId > 0 || this.userLoginId != null) {
                //this.listarCitas(this.userLoginId)
              }

            }
          })
          this.loginService.currentUserNombre.subscribe({
            next: (userNombre) => {
              this.userNombre = userNombre
            }
          })
        }
      }
    })

    this.formularioRegistro = new FormGroup({
      fechaDiagnostico: new FormControl('', [ Validators.required, ]),
      horaDiagnostico: new FormControl('', [ Validators.required, ]),
    });

   this._tokenLogin.currentUserData.subscribe({
    next:(token) => {
      this.refresh_token = token.toString()
    }
   })
  }

  //============================================================================
  // MOSTRAR LISTADO MODELO AUTOS - DESPLEGABLE
  //============================================================================

  public sendIngreso(): void {
    const formValue = this.ingreso
    const currentDate = new Date();
    const fechaActual = currentDate.toISOString().split('T')[0];
    formValue.fechaIngreso = fechaActual
    const currentTimeString = currentDate.toTimeString().split(' ')[0];
    const horaConSegundos = currentTimeString.length === 5 ? currentTimeString + ':00' : currentTimeString;
    formValue.horaIngreso = horaConSegundos
    const id_Prediagnostico = this.diagnosticoSeleccionado.id_Prediagnostico
    formValue.id_Prediagnostico_Fk.id_Prediagnostico = id_Prediagnostico
    const empleadoId = this.empleadoSeleccionada.id_Empleado
    formValue.id_Empleado_Fk.id_Empleado = empleadoId
    console.log(formValue);

    this._getIngresoUseCase
      .newOrdenTrabajo(formValue)
      .subscribe((response: any) => {
        console.log(response);

        this.mensajeValidacionRegistroCorrecto(response)
      });
  }

  //============================================================================
  // SWEETALERT
  //============================================================================

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Cita creada correctamente.';
    Swal.fire('CONFIRMACIÓN', message, 'success').then(() => {
      window.location.reload();;
    });
  }

  mensajeValidacionRegistroIncorrecto(response: any) {
    const message = response && response.error.error ? response.error.error : 'Cita registrada incorrectamente';
    Swal.fire('ERROR', message, 'error').then(() => {
      window.location.reload();;
    });
  }

  private showFailureAlert(title: string, message: string): void {
    Swal.fire(title, message, 'error').then(() => {
      window.location.reload();
    });
  }

  //============================================================================
  // DESTRCUCCIÓN DEL CARGADO DE DATOS
  //============================================================================

  ngOnDestroy(): void {
    // if (this.citaSubscription) {
    //   this.citaSubscription.unsubscribe();
    // }
  }

  showRegistroCita: boolean = false
  @Output() cerrarComponenteEventCita = new EventEmitter<void>();
  cerrarComponenteCita(): void {
    this.showRegistro = false;
    this.cerrarComponenteEvent.emit();
  }
}
