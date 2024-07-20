import { GetChoferesUseCases } from './../../../../../../../../domain/useCase/get-choferes-use-case';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, delay, of, retry, Subscription, tap, timeout } from 'rxjs';
import { TableDatosChoferesComponent } from '../../organisms/table-datos-choferes/table-datos-choferes.component';
import { TableDatosClientesComponent } from '../../../../clientes/components/organisms/table-datos-clientes/table-datos-clientes.component';
import { RegistroDatosClientesPageComponent } from '../../../../clientes/components/pages/registro-datos-clientes-page/RegistroDatosClientesPageComponent';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { choferesModel } from '../../../../../../../../domain/models/choferes/choferes.model';
import { RegisttroChoferesPageComponent } from '../registtro-choferes-page/registtro-choferes-page.component';
import { FooterChoferComponent } from '../../organisms/footer-chofer/footer-chofer.component';
import { TableDatosChoferes2Component } from '../../organisms/table-datos-choferes-2/table-datos-choferes-2.component';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../../../../../infraestrcuture/driven-adapter/login/auth.service';


@Component({
  selector: 'app-lista-choferes-page',
  standalone: true,
  imports: [
    RegistroDatosClientesPageComponent,
    HeaderPagesConfigurationComponent,
    TableDatosClientesComponent,
    CommonModule,
    TableDatosChoferesComponent,
    RegisttroChoferesPageComponent,
    FooterChoferComponent,
    TableDatosChoferes2Component
  ],
  templateUrl: './lista-choferes-page.component.html',
  styleUrls: ['./lista-choferes-page.component.css']
})
export class ListaChoferesPageComponent {
  nombrePagina: String = 'CHOFERES';
  isLoading: boolean = false;
  sinConexion: boolean = false;
  datosChofereslista: Array<choferesModel> = [];
  listObservers$: Array<Subscription> = [];
  p: number = 1;
  cantDatosPorPagina: number = 7;
  mensajeServidor: String = '';
  refresh_token: string = '';
  userNombre: String = ''
  userLoginOn : boolean = false;
  userLoginId : number = 0;
  statusToken : boolean = false

  cambiarVista: boolean = true;
  cambiarVistaTable():void {
    this.cambiarVista = !this.cambiarVista
  }

  private _getChoferesUseCase = inject(GetChoferesUseCases);
  private clientesSubscription: Subscription | undefined;
  constructor(
    private _tokenLogin: AuthService,
    private loginService: AuthService,
  ) { }

  ngOnInit(): void {
    this.datosLogin()
    this.obtenerClientesExito();
  }

  datosLogin() {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn = userLoginOn;
        if(this.userLoginOn) {
          this.loginService.currentUserIdEmpleado.subscribe({
            next: (userLoginId) => {
              this.userLoginId = userLoginId
              console.log(this.userLoginId);

              if(this.userLoginId > 0 || this.userLoginId != null) {

              }

            }
          })
          this.loginService.currentUserNombre.subscribe({
            next: (userNombre) => {
              this.userNombre = userNombre
            }
          })
          this.loginService.currentCredenciales.subscribe({
            next: (statusToken) => {
              this.statusToken = statusToken
              console.log(this.statusToken);

              if(this.statusToken == false) {
                this.mensajeSessionExpirada()
              }
            }
          })

        }
      }
    })
  }

  cliente: clienteModel = {} as clienteModel;
  obtenerClientesExito(): void {
    this.isLoading = true;
    this.clientesSubscription = this._getChoferesUseCase.getAllChoferes()
      .pipe(
        timeout(5000),
        retry(2),
        catchError(error => {
          // this.mensajeValidacionError(error)
          return of([]).pipe(
            delay(5000),
            tap(() => {
              this.sinConexion = false
              this.isLoading = false;
              this.mensajeValidacionSinConexion();
            })
          );
        })
      )
      .subscribe((Response: choferesModel[]) => {
        this.datosChofereslista = Response;
        this.isLoading = false;
      });
  }

  //================================================================
  // SWEETALERT
  //================================================================
  mensajeValidacionSinConexion() {
    const message = 'La solicitud tardó demasiado en responder. Por favor, intenta de nuevo.';
    Swal.fire(`Tiempo agotado`, message, 'error').then(() => {
      this.sinConexion =  true
    });
  }

  refrescar() {
    window.location.reload();
  }

  mensajeValidacionError(error: string) {
    const message = `Hubo un error`;
    Swal.fire(`Error`, message, 'error').then(() => {
      window.location.reload();
    });
  }

  mensajeSessionExpirada():void {
    const message = `Sessión expirada`;
    Swal.fire(`Ha culminado el tiempo de la sessión, vuelva a iniciar sesión`, message, 'error').then(() => {
      this.loginService.logout()
    });
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  ngOnDestroy(): void {
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
    }
  }
}
