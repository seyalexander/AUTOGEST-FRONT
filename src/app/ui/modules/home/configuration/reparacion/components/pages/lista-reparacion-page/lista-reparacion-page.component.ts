import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { TableDatosReparacionComponent } from '../../organisms/table-datos-reparacion/table-datos-reparacion.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { reparacionModel } from '../../../../../../../../domain/models/reparacion/reparacion.model';
import { GetReparacionUseCases } from '../../../../../../../../domain/useCase/get-reparacion-use-case';

@Component({
    selector: 'app-lista-reparacion-page',
    templateUrl: './lista-reparacion-page.component.html',
    styleUrls: ['./lista-reparacion-page.component.css'],
    standalone: true,
    imports: [HeaderPagesConfigurationComponent, TableDatosReparacionComponent]
})
export class ListaReparacionPageComponent {
  nombrePagina: String = 'REPARACIÓN'

  datosReparacionlista: Array <reparacionModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getReparacionUseCase: GetReparacionUseCases) {}


  ngOnInit():  void {

    const ObservarDatosModeloAutos$ = this._getReparacionUseCase.getAllReparacion().
    subscribe( Response => {
        this.datosReparacionlista = Response;
      })

    this.listObservers$ = [ObservarDatosModeloAutos$]

  }
}
