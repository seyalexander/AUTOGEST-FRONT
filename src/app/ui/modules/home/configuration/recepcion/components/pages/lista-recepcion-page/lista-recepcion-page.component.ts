import { citasModel } from './../../../../../../../../domain/models/citas/citas.model';
import { Component } from '@angular/core';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { recepcionModel } from '../../../../../../../../domain/models/recepcion/recepcion.model';
import { Subscription } from 'rxjs';
import { GetRecepcionUseCase } from '../../../../../../../../domain/useCase/get-recepcion-use-case';
import { GetCitasUseCase } from '../../../../../../../../domain/useCase/get-citas-use-case';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../../../../../infraestrcuture/driven-adapter/login/auth.service';
import { TarjetaEstadosComponent } from '../../organisms/tarjeta-estados/tarjeta-estados.component';
import { TarjetaCitasComponent } from '../../organisms/tarjeta-citas/tarjeta-citas.component';
import { TarjetaDiagnosticoComponent } from '../../organisms/tarjeta-diagnostico/tarjeta-diagnostico.component';
import { preDiagnosticoModel } from '../../../../../../../../domain/models/preDiagnostico/preDiagnostico.model';
import { GetPreDiagnosticoUseCase } from '../../../../../../../../domain/useCase/get-preDiagnostico-use-case';
import { RegistrarDiagnosticoComponent } from '../../organisms/registrar-diagnostico/registrar-diagnostico.component';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';
import { autosModel } from '../../../../../../../../domain/models/autos/autos.model';
import { modeloAutosModel } from '../../../../../../../../domain/models/modelo-autos/modelo-autos.model';
import { marcaAutosModel } from '../../../../../../../../domain/models/marcas-autos/marca-autos.model';
import { choferesModel } from '../../../../../../../../domain/models/choferes/choferes.model';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';
import { RegistrarIngresoComponent } from '../../organisms/registrar-ingreso/registrar-ingreso.component';
import { ordenTrabajoModel } from '../../../../../../../../domain/models/orden-trabajo/orden-trabajo.model';
import { RegistrarRecepcionComponent } from '../../organisms/registrar-recepcion/registrar-recepcion.component';

@Component({
  selector: 'app-lista-recepcion-page',
  standalone: true,
  imports: [
    HeaderPagesConfigurationComponent,
    TarjetaEstadosComponent,
    TarjetaCitasComponent,
    TarjetaDiagnosticoComponent,
    RegistrarDiagnosticoComponent,
    RegistrarIngresoComponent,
    RegistrarRecepcionComponent
  ],
  templateUrl: './lista-recepcion-page.component.html',
  styleUrl: './lista-recepcion-page.component.css'
})
export class ListaRecepcionPageComponent {
  nombrePagina: String = 'RECEPCIÓN'

  datosRecepcionlista: Array<recepcionModel> = [];
  datosCitaslista: Array<citasModel> = [];
  datosDiagnosticolista: Array<preDiagnosticoModel> = [];
  listObservers$: Array<Subscription> = [];
  refresh_token: string = '';
  userNombre: String = ''
  userLoginOn: boolean = false;
  userLoginId: number = 0;

  idGuardado: number = 0

  constructor(
    private _getRecepcionUseCase: GetRecepcionUseCase,
    private _getCitaUseCase: GetCitasUseCase,
    private _getDiagnosticoUseCase: GetPreDiagnosticoUseCase,
    private _getPreDiagnosticoUseCase: GetPreDiagnosticoUseCase,
    private loginService: AuthService,
  ) { }


  ngOnInit(): void {
    this.obtenerCitas()
    this.obtenerRecepcion()
    this.obtenerPreDiagnostico()
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
        if (this.userLoginOn) {
          this.loginService.currentUserIdEmpleado.subscribe({
            next: (userLoginId) => {
              this.userLoginId = userLoginId
              console.log(this.userLoginId);

              if (this.userLoginId > 0 || this.userLoginId != null) {
                this.userLoginId
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
  }

  obtenerRecepcion(): void {
    const ObservarDatosRecepcion$ = this._getRecepcionUseCase.getRecepcion().
      subscribe(Response => {
        this.datosRecepcionlista = Response;
      })

    this.listObservers$ = [ObservarDatosRecepcion$]
  }

  obtenerCitas(): void {
    const ObservarDatosRecepcion$ = this._getCitaUseCase.citasEntregadas().
      subscribe(Response => {
        this.datosCitaslista = Response;
      })

    this.listObservers$ = [ObservarDatosRecepcion$]
  }

  obtenerPreDiagnostico(): void {
    const ObservarDatosDiagnostico$ = this._getPreDiagnosticoUseCase.getDiagnostico().
      subscribe(Response => {
        this.datosDiagnosticolista = Response;
      })

    this.listObservers$ = [ObservarDatosDiagnostico$]
  }

  citaSeleccionada: citasModel = {} as citasModel;
  citaSeleccionado(idCita: number) {
    this._getCitaUseCase
      .getByIdUnique(idCita)
      .subscribe((Response: citasModel) => {
        this.citaSeleccionada = Response;
        console.log(Response);
        //this.sendCita()
      });
  }

  recepcionSeleccionada: recepcionModel = {} as recepcionModel;
  recepcionSeleccionada_cita: citasModel = {} as citasModel;
  recepcionSeleccionada_empleado: empleadoModel = {} as empleadoModel;
  recepcionSeleccionada_auto: autosModel = {} as autosModel;
  recepcionSeleccionada_modelo: modeloAutosModel = {} as modeloAutosModel;
  recepcionSeleccionada_marca: marcaAutosModel = {} as marcaAutosModel;
  recepcionSeleccionada_chofer: choferesModel = {} as choferesModel;
  recepcionSeleccionada_cliente: clienteModel = {} as clienteModel;

  recepcionSeleccionado(idRecepcion: number) {
    this._getRecepcionUseCase
      .getByIdUnique(idRecepcion)
      .subscribe((Response: recepcionModel) => {
        this.recepcionSeleccionada = Response;
        this.recepcionSeleccionada_cita = this.recepcionSeleccionada.id_Cita_Fk;
        this.recepcionSeleccionada_empleado = this.recepcionSeleccionada.id_Empleado_Fk;
        this.recepcionSeleccionada_auto = this.recepcionSeleccionada.id_Cita_Fk.id_Auto_Fk;
        this.recepcionSeleccionada_modelo = this.recepcionSeleccionada.id_Cita_Fk.id_Auto_Fk.idModeloFk
        this.recepcionSeleccionada_marca = this.recepcionSeleccionada.id_Cita_Fk.id_Auto_Fk.idModeloFk.idMarcaFK
        this.recepcionSeleccionada_chofer = this.recepcionSeleccionada.id_Cita_Fk.id_Chofer_Fk
        this.recepcionSeleccionada_cliente =  this.recepcionSeleccionada.id_Cita_Fk.id_Auto_Fk.idClienteFk
      });
  }

  ingresoSeleccionado: ordenTrabajoModel = {} as ordenTrabajoModel;
  diagnosticoSeleccionada: preDiagnosticoModel = {} as preDiagnosticoModel;
  ingresoSeleccionada_recepcion: recepcionModel = {} as recepcionModel;
  ingresoSeleccionada_cita: citasModel = {} as citasModel;
  ingresoSeleccionada_empleado: empleadoModel = {} as empleadoModel;
  ingresoSeleccionada_auto: autosModel = {} as autosModel;
  ingresoSeleccionada_modelo: modeloAutosModel = {} as modeloAutosModel;
  ingresoSeleccionada_marca: marcaAutosModel = {} as marcaAutosModel;
  ingresoSeleccionada_chofer: choferesModel = {} as choferesModel;
  ingresoSeleccionada_cliente: clienteModel = {} as clienteModel;
  diagnosticoSeleccionado(idDiagnostico: number) {
    this._getDiagnosticoUseCase
      .getByIdUnique(idDiagnostico)
      .subscribe((Response: preDiagnosticoModel) => {
        this.diagnosticoSeleccionada = Response;
        this.ingresoSeleccionada_cliente = Response.id_Recepcion_Fk.id_Cita_Fk.id_Auto_Fk.idClienteFk;
        this.ingresoSeleccionada_recepcion = Response.id_Recepcion_Fk
        this.ingresoSeleccionada_auto = Response.id_Recepcion_Fk.id_Cita_Fk.id_Auto_Fk
        this.ingresoSeleccionada_modelo = Response.id_Recepcion_Fk.id_Cita_Fk.id_Auto_Fk.idModeloFk
        this.ingresoSeleccionada_marca = Response.id_Recepcion_Fk.id_Cita_Fk.id_Auto_Fk.idModeloFk.idMarcaFK
        this.ingresoSeleccionada_empleado = Response.id_Empleado_Fk
      });
  }

  tituloSwalCorrecto: String = 'CONFIRMACIÓN';

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Se cambió el estado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      window.location.reload();
    });
  }


}
