import { ordenTrabajoModel } from './../../../../../../../../domain/models/orden-trabajo/orden-trabajo.model';
import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';
import { marcaAutosModel } from '../../../../../../../../domain/models/marcas-autos/marca-autos.model';
import { MensajeDatosIncorrectosComponent } from '../../../../../../../shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { modeloAutosModel } from '../../../../../../../../domain/models/modelo-autos/modelo-autos.model';
import { autosModel } from '../../../../../../../../domain/models/autos/autos.model';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';
import { choferesModel } from '../../../../../../../../domain/models/choferes/choferes.model';
import { GetOrdenTrabajoUseCases } from '../../../../../../../../domain/useCase/get-orden-trabajo-use-case';
import { GetModeloAutosUseCases } from '../../../../../../../../domain/useCase/get-modelo-autos-use-case';
import { GetMarcaAutosUseCases } from '../../../../../../../../domain/useCase/get-marca-autos-use-case';
import { GetAutosUseCases } from '../../../../../../../../domain/useCase/get-autos-use-case';
import { GetTipoEmpleadosUseCases } from '../../../../../../../../domain/useCase/get-empleado-use-case';
import { GetChoferesUseCases } from '../../../../../../../../domain/useCase/get-choferes-use-case';
import { citasModel } from '../../../../../../../../domain/models/citas/citas.model';
import { GetCitasUseCase } from '../../../../../../../../domain/useCase/get-citas-use-case';
import { AuthService } from '../../../../../../../../infraestrcuture/driven-adapter/login/auth.service';

@Component({
    selector: 'app-registro-datos-orden-trabajo-page',
    templateUrl: './registro-datos-orden-trabajo-page.component.html',
    styleUrls: ['./registro-datos-orden-trabajo-page.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, MensajeDatosIncorrectosComponent, CommonModule]
})
export class RegistroDatosOrdenTrabajoPageComponent {
  tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  datosMarcaAutoslista: Array <marcaAutosModel> = [];
  datosModeloAutoslista: Array <modeloAutosModel> = [];
  datosAutoslista: Array <autosModel> = [];
  datosEmpleadolista: Array <empleadoModel> = [];
  datosChoferlista: Array <choferesModel> = [];
  listObservers$: Array<Subscription> = [];
  citasResponse: Array<citasModel> = [];
  private citaSubscription: Subscription | undefined;
  datosCitaslista: Array<citasModel> = [];
  listaCitasEntrega: Array <citasModel> = [];


  userNombre: String = ''
  userLoginOn : boolean = false;
  userLoginId : number = 0;
  userData : any = ""

  private _getCitasUseCase = inject(GetCitasUseCase);
  private loginService = inject(AuthService);

  @Output() cerrarComponenteEvent = new EventEmitter<void>();

  cerrarComponente(): void {
    this.showRegistro = false;
    this.cerrarComponenteEvent.emit();
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  ordenIngreso: ordenTrabajoModel = new ordenTrabajoModel();
  formularioRegistro: FormGroup = new FormGroup({});
  private marcaAutoSubscription: Subscription | undefined;
  private modeloAutoSubscription: Subscription | undefined;
  private autoSubscription: Subscription | undefined;
  private empleadoSubscription: Subscription | undefined;
  private choferSubscription: Subscription | undefined;

  constructor(
    private _postOrdenIngresoUseCase: GetOrdenTrabajoUseCases,
    private _getmodeloAutoUseCase: GetModeloAutosUseCases,
    private _getMarcaAutoUseCase: GetMarcaAutosUseCases,
    private _getAutoUseCase: GetAutosUseCases,
    private _getEmpleadoUseCase: GetTipoEmpleadosUseCases,
    private _getChoferUseCase: GetChoferesUseCases
  ) {}

  ngOnInit(): void {
    this.obtenerEmpleadosExito()

    this.formularioRegistro = new FormGroup({
      Descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      Auto: new FormControl('', [
      ]),
      Empleado: new FormControl('', [
      ]),
      Chofer: new FormControl('', [
      ]),
    });


    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
        console.log(this.userLoginOn);

        if (this.userLoginOn) {
          this.listarCitas()
        } else {
          this.userLoginId = 0;
          this.userNombre = '';
          this.userData = '';
          this.datosAutoslista = [];
          this.datosCitaslista = [];

        }
      }
    });
  }

  obtenerEmpleadosExito(): void {
    this.empleadoSubscription = this._getEmpleadoUseCase.getAllEmpleados().
      subscribe((Response: empleadoModel[]) => {
        this.datosEmpleadolista = Response;
      })
  }


  listarCitas() {
    this.citaSubscription = this._getCitasUseCase.citasEntregadas()
    .subscribe((Response: citasModel[]) => {
      this.listaCitasEntrega = Response
      console.log(this.listaCitasEntrega);
      console.log(Response);
    })

  }

  public sendOrdenIngreso(): void {
      this._postOrdenIngresoUseCase
      .newOrdenTrabajo(this.ordenIngreso)
      .subscribe((response: any) => {
        this.cerrarComponente()
        this.mensajeValidacionRegistroCorrecto(response)
      });
  }

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Orden de ingreso registrado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaTipoDocumento();
    });
  }

  regresarListaTipoDocumento() {
    window.location.reload();
  }

  ngOnDestroy(): void {
    if (this.marcaAutoSubscription) {
      this.marcaAutoSubscription.unsubscribe();
    }
    if (this.modeloAutoSubscription) {
      this.modeloAutoSubscription.unsubscribe();
    }
    if (this.autoSubscription) {
      this.autoSubscription.unsubscribe();
    }
    if (this.empleadoSubscription) {
      this.empleadoSubscription.unsubscribe();
    }
    if (this.choferSubscription) {
      this.choferSubscription.unsubscribe();
    }
  }
}
