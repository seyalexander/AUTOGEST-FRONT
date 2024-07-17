import { GetChoferesUseCases } from './../../../../../../../../domain/useCase/get-choferes-use-case';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TableDatosChoferesComponent } from '../../organisms/table-datos-choferes/table-datos-choferes.component';
import { TableDatosClientesComponent } from '../../../../clientes/components/organisms/table-datos-clientes/table-datos-clientes.component';
import { RegistroDatosClientesPageComponent } from '../../../../clientes/components/pages/registro-datos-clientes-page/RegistroDatosClientesPageComponent';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { choferesModel } from '../../../../../../../../domain/models/choferes/choferes.model';
import { RegisttroChoferesPageComponent } from '../registtro-choferes-page/registtro-choferes-page.component';
import { FooterChoferComponent } from '../../organisms/footer-chofer/footer-chofer.component';
import { TableDatosChoferes2Component } from '../../organisms/table-datos-choferes-2/table-datos-choferes-2.component';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';


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
  isLoading = false;
  datosChofereslista: Array<choferesModel> = [];
  listObservers$: Array<Subscription> = [];
  p: number = 1;
  cantDatosPorPagina: number = 7;
  mensajeServidor: String = '';

  cambiarVista: boolean = true;
  cambiarVistaTable():void {
    this.cambiarVista = !this.cambiarVista
  }

  private _getChoferesUseCase = inject(GetChoferesUseCases);
  private clientesSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.obtenerClientesExito();
  }

  cliente: clienteModel = {} as clienteModel;
  obtenerClientesExito(): void {
    this.isLoading = true;
    this.clientesSubscription = this._getChoferesUseCase.getAllChoferes().
      subscribe((Response: choferesModel[]) => {
        this.datosChofereslista = Response
        console.log(Response);

        this.isLoading = false;
      })
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  regresarListaClientes() {
    window.location.reload();
  }

  ngOnDestroy(): void {
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
    }
  }
}
