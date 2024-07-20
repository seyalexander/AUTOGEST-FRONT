import { Component } from '@angular/core';
import { reparacionModel } from '../../../../../../../../domain/models/reparacion/reparacion.model';
import { Subscription } from 'rxjs';
import { GetReparacionUseCases } from '../../../../../../../../domain/useCase/get-reparacion-use-case';
import { listaEmpleado } from '../../../../../../../../domain/models/reparacion/listaEmpleado.model';
import { CommonModule } from '@angular/common';
import { GetTipoEmpleadosUseCases } from '../../../../../../../../domain/useCase/get-empleado-use-case';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';
import { GetProductosUseCases } from '../../../../../../../../domain/useCase/get-productos-use-case';
import { productosModel } from '../../../../../../../../domain/models/productos/productos.model';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { ordenTrabajoModel } from '../../../../../../../../domain/models/orden-trabajo/orden-trabajo.model';
import { GetOrdenTrabajoUseCases } from '../../../../../../../../domain/useCase/get-orden-trabajo-use-case';
import { DetalleServicioModel } from '../../../../../../../../domain/models/reparacion/DetalleServicio.model';
import { Detalle_Empleado_ServicioModel } from '../../../../../../../../domain/models/Detalle_Empleado_Servici/Detalle_Empleado_Servicio.model';
import { ProductSearchComponent } from '../../organisms/product-search/product-search.component';
import { PosComponent } from '../../organisms/pos/pos.component';
import { GetDetalleEmpleadosUseCases } from '../../../../../../../../domain/useCase/get-detalleEmpleado-use-case';

@Component({
    selector: 'app-registro-datos-reparacion-page',
    templateUrl: './registro-datos-reparacion-page.component.html',
    styleUrls: ['./registro-datos-reparacion-page.component.css'],
    standalone: true,
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      PosComponent,
    ]
})
export class RegistroDatosReparacionPageComponent {
  datosReparacionlista: Array <reparacionModel> = [];
  datosEmpleadosLista: Array <listaEmpleado> = []
  listObservers$: Array<Subscription> = [];

  reparacion: reparacionModel = new reparacionModel();
  detalleEmpleado: Detalle_Empleado_ServicioModel = new Detalle_Empleado_ServicioModel();
  detalle: Detalle_Empleado_ServicioModel = new Detalle_Empleado_ServicioModel();
  formularioRegistro: FormGroup = new FormGroup({});

  constructor (
    private _getReparacionUseCase: GetReparacionUseCases,
    private _getEmpleadosUseCase: GetTipoEmpleadosUseCases,
    private _getProductosUseCase: GetProductosUseCases,
    private _getOrdenTrabajoUseCase: GetOrdenTrabajoUseCases,
    private _getDetalleReparacionUseCase: GetDetalleEmpleadosUseCases,
  ) {}


  ngOnInit():  void {
    this.obtenerEmpleadosExito()
    this.obtenerProductosExito()
    this.obtenerIngresoExito()

    const ObservarDatosModeloAutos$ = this._getReparacionUseCase.getAllReparacion().
    subscribe( Response => {
        this.datosReparacionlista = Response;
      })

    this.listObservers$ = [ObservarDatosModeloAutos$]

    this.formularioRegistro = new FormGroup({
      fechaDiagnostico: new FormControl('', [ Validators.required, ]),
      horaDiagnostico: new FormControl('', [ Validators.required, ]),
      ordenTrabajo: new FormControl('', [ Validators.required, ]),
      empleados: new FormControl('', [ Validators.required, ]),
    });
  }

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

  datosProductoslista: Array <productosModel> = [];
  private productosSubscription: Subscription | undefined;
  obtenerProductosExito(): void {
    this.productosSubscription = this._getProductosUseCase
    .getAllProductos()
    .subscribe((Response: productosModel[]) => {
        this.datosProductoslista = Response;
        console.log(this.datosProductoslista);
      })
  }

  datosOrdenTrabjolista: Array <ordenTrabajoModel> = [];
  obtenerIngresoExito(): void {
    const ObservarDatosModeloAutos$ = this._getOrdenTrabajoUseCase.getAllOrdenTrabajo().
    subscribe( Response => {
        this.datosOrdenTrabjolista = Response;
        console.log(this.datosOrdenTrabjolista);

      })

  }


  public sendReparacion(): void {
    const formValue = this.reparacion
    const formDetalle = this.detalle
    console.log( formValue );
    console.log( formDetalle );


    // const currentDate = new Date();
    // const fechaActual = currentDate.toISOString().split('T')[0];
    // formValue.fechaIngreso = fechaActual
    // const currentTimeString = currentDate.toTimeString().split(' ')[0];
    // const horaConSegundos = currentTimeString.length === 5 ? currentTimeString + ':00' : currentTimeString;
    // formValue.horaIngreso = horaConSegundos
    // const id_Prediagnostico = this.diagnosticoSeleccionado.id_Prediagnostico
    // formValue.id_Prediagnostico_Fk.id_Prediagnostico = id_Prediagnostico
    // const empleadoId = this.empleadoSeleccionada.id_Empleado
    // formValue.id_Empleado_Fk.id_Empleado = empleadoId
    console.log(formValue);

    this._getReparacionUseCase
      .newReparacion(formValue)
      .subscribe((response: any) => {
        console.log(response);
        this.mensajeValidacionRegistroCorrecto(response)
      });
  }

  public sendDetalleReparacionEmpleados() {
    const formValue = this.detalleEmpleado
    this._getDetalleReparacionUseCase
    .newDetalleEmpleado(formValue)
    .subscribe((response: any) => {
      console.log(response);
    })
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
}
