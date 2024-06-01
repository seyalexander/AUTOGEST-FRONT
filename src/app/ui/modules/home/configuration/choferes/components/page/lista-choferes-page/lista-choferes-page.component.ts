import { GetChoferesUseCases } from './../../../../../../../../domain/useCase/get-choferes-use-case';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TableDatosChoferesComponent } from '../../organisms/table-datos-choferes/table-datos-choferes.component';
import { TableDatosClientesComponent } from '../../../../clientes/components/organisms/table-datos-clientes/table-datos-clientes.component';
import { RegistroDatosClientesPageComponent } from '../../../../clientes/components/pages/registro-datos-clientes-page/RegistroDatosClientesPageComponent';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { HeaderConfigurationComponent } from '../../../../../../../shared/components/organisms/header-configuration/header-configuration.component';
import { choferesModel } from '../../../../../../../../domain/models/choferes/choferes.model';


@Component({
  selector: 'app-lista-choferes-page',
  standalone: true,
  imports: [
    RegistroDatosClientesPageComponent,
    HeaderPagesConfigurationComponent,
    TableDatosClientesComponent,
    CommonModule,
    TableDatosChoferesComponent,
    HeaderConfigurationComponent
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


  private _getChoferesUseCase = inject(GetChoferesUseCases);
  private clientesSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.obtenerClientesExito();
  }

  obtenerClientesExito(): void {
    this.isLoading = true;
    this.clientesSubscription = this._getChoferesUseCase.getAllChoferes().
      subscribe((Response: choferesModel[]) => {
        this.datosChofereslista = Response;
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
