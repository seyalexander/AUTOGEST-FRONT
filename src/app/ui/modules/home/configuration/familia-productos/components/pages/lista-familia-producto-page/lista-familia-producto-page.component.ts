import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';
import { TableDatosFamiliaProductosComponent } from '../../organisms/table-datos-familia-productos/table-datos-familia-productos.component';

import { TableDatosProductosComponent } from '../../../../productos/components/organisms/table-datos-productos/table-datos-productos.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { familiaProductoModel } from '../../../../../../../../domain/models/familia-productos/familiaProductos.model';
import { GetFamiliaProductosUseCases } from '../../../../../../../../domain/useCase/get-familiaProductos.use-case';
import { RegistroFamiliaProductoPageComponent } from '../registro-familia-producto-page/registro-familia-producto-page.component';

@Component({
  selector: 'app-lista-familia-producto-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderPagesConfigurationComponent,
    TableDatosFamiliaProductosComponent,
     TableDatosProductosComponent,
     RegistroFamiliaProductoPageComponent
    ],
  templateUrl: './lista-familia-producto-page.component.html',
  styleUrls: ['./lista-familia-producto-page.component.css']
})
export class ListaFamiliaProductoPageComponent {
  nombrePagina: String = 'FAMILIA PRODUCTOS'
  isLoading = false;
  datosFamiliaProductoslista: Array <familiaProductoModel> = [];
  listObservers$: Array<Subscription> = [];


  constructor (private _getFamiliaProductosUseCase: GetFamiliaProductosUseCases) {}

  private familiaProductosSubscription: Subscription | undefined;

  ngOnInit():  void {
    this.obtenerFamiliaProductosExito();
  }

  showRegistro: boolean = true;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
    console.log( "MODAL PRODUCTO: ",this.showRegistro);

  }


  obtenerFamiliaProductosExito(): void {
    this.isLoading = true;
    this.familiaProductosSubscription = this._getFamiliaProductosUseCase
    .getAllFamiliaProductos()
    .subscribe((Response: familiaProductoModel[]) => {
        this.datosFamiliaProductoslista = Response;
        this.isLoading = false;
      })
  }

  ngOnDestroy(): void {
    if (this.familiaProductosSubscription) {
      this.familiaProductosSubscription.unsubscribe();
    }
  }
}
