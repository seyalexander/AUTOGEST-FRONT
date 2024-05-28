import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';

import { TableDatosProductosComponent } from '../../organisms/table-datos-productos/table-datos-productos.component';
import { productosModel } from '../../../../../../../../domain/models/productos/productos.model';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { GetProductosUseCases } from '../../../../../../../../domain/useCase/get-productos-use-case';

@Component({
  selector: 'app-lista-productos-page',
  standalone: true,
  imports: [CommonModule, HeaderPagesConfigurationComponent, TableDatosProductosComponent],
  templateUrl: './lista-productos-page.component.html',
  styleUrls: ['./lista-productos-page.component.css']
})
export class ListaProductosPageComponent {
  nombrePagina: String = 'PRODUCTOS'
  isLoading = false;
  datosProductoslista: Array <productosModel> = [];
  listObservers$: Array<Subscription> = [];


  constructor (private _getProductosUseCase: GetProductosUseCases) {}

  private productosSubscription: Subscription | undefined;

  ngOnInit():  void {
    this.obtenerProductosExito();
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }


  obtenerProductosExito(): void {
    this.isLoading = true;
    this.productosSubscription = this._getProductosUseCase
    .getAllProductos()
    .subscribe((Response: productosModel[]) => {
        this.datosProductoslista = Response;
        this.isLoading = false;
      })
  }

  ngOnDestroy(): void {
    if (this.productosSubscription) {
      this.productosSubscription.unsubscribe();
    }
  }
}
