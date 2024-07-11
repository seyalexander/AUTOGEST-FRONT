import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { recepcionModel } from '../../../../../../../../domain/models/recepcion/recepcion.model';
import { citasModel } from '../../../../../../../../domain/models/citas/citas.model';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';
import { autosModel } from '../../../../../../../../domain/models/autos/autos.model';
import { modeloAutosModel } from '../../../../../../../../domain/models/modelo-autos/modelo-autos.model';
import { marcaAutosModel } from '../../../../../../../../domain/models/marcas-autos/marca-autos.model';
import { choferesModel } from '../../../../../../../../domain/models/choferes/choferes.model';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';
import { AuthService } from '../../../../../../../../infraestrcuture/driven-adapter/login/auth.service';
import { GetPreDiagnosticoUseCase } from '../../../../../../../../domain/useCase/get-preDiagnostico-use-case';
import { preDiagnosticoModel } from '../../../../../../../../domain/models/preDiagnostico/preDiagnostico.model';
import Swal from 'sweetalert2';
import { GetRecepcionUseCase } from '../../../../../../../../domain/useCase/get-recepcion-use-case';

@Component({
  selector: 'app-registrar-recepcion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrar-recepcion.component.html',
  styleUrl: './registrar-recepcion.component.css'
})
export class RegistrarRecepcionComponent {
  refresh_token: string = '';
  userNombre: String = ''
  userLoginOn : boolean = false;
  userLoginId : number = 0;
  mensajeRegistro: String = 'Cita creada correctamente'
  mensajeRegistroIncorrecto: String = 'Algo falló en el registro'

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
    private _getrecepcionUseCase: GetRecepcionUseCase
  ) { }

  recepcion: recepcionModel = new recepcionModel();
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
              console.log(this.userLoginId);

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
      fechaRecepcion: new FormControl('', [ ]),
      horaRecepcion: new FormControl('', [ ]),
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

  arecepcion: recepcionModel = new recepcionModel();
  public sendRecepcion(): void {
    const idCita = this.citaSeleccionada.id_Citas
    const currentDate = new Date();
    const empleadoId = this.userLoginId
    const fechaActual = currentDate.toISOString().split('T')[0];
    const formValue = this.arecepcion
    const horaValue = this.citaSeleccionada.hora;
    const horaConSegundos = horaValue.length === 5 ? horaValue + ':00' : horaValue;
    formValue.hora = horaConSegundos.toString();
    formValue.fecha = fechaActual
    formValue.id_Empleado_Fk.id_Empleado = empleadoId
    formValue.id_Cita_Fk.id_Citas = idCita
    console.log(formValue);

    this._getrecepcionUseCase
      .newRecepcion(formValue)
      .subscribe((response: any) => {
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
