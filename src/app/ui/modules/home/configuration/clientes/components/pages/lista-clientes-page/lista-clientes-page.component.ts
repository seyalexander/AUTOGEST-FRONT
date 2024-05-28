import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { NgxPaginationModule } from 'ngx-pagination';
import { TableDatosClientesComponent } from '../../organisms/table-datos-clientes/table-datos-clientes.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { RegistroDatosClientesPageComponent } from '../registro-datos-clientes-page/RegistroDatosClientesPageComponent';
import { CommonModule } from '@angular/common';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';
import { GetClientesUseCases } from '../../../../../../../../domain/useCase/get-clientes-use-case';


@Component({
    selector: 'app-lista-clientes-page',
    templateUrl: './lista-clientes-page.component.html',
    styleUrls: ['./lista-clientes-page.component.css'],
    standalone: true,
    imports: [RegistroDatosClientesPageComponent, HeaderPagesConfigurationComponent, TableDatosClientesComponent, NgxPaginationModule, CommonModule ]
})
export class ListaClientesPageComponent implements OnDestroy {

  nombrePagina: String = 'CLIENTES';
  isLoading = false;
  datosClienteslista: Array<clienteModel> = [];
  listObservers$: Array<Subscription> = [];
  p: number = 1;
  cantDatosPorPagina: number = 7;
  mensajeServidor: String = '';


  private _getClientesUseCase = inject(GetClientesUseCases);


  private clientesSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.obtenerClientesExito();
  }

  obtenerClientesExito(): void {
    this.isLoading = true;
    this.clientesSubscription = this._getClientesUseCase.getAllClientes().
      subscribe((Response: clienteModel[]) => {
        this.datosClienteslista = Response;
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
