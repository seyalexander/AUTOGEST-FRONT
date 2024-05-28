import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';
import { OrderListClientesPipe } from '../../../../../../../shared/pipes/order/clientes/order-list-clientes.pipe';
import { MensajeTablaVaciaComponent } from '../../../../../../../shared/components/validadores/mensaje-tabla-vacia/mensaje-tabla-vacia.component';
import { LoadersTablesPagesComponent } from '../../../../../../../shared/components/organisms/loaders-tables-pages/loaders-tables-pages.component';
import { NgIf, NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';

@Component({
    selector: 'app-table-datos-clientes',
    templateUrl: './table-datos-clientes.component.html',
    styleUrls: ['./table-datos-clientes.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, LoadersTablesPagesComponent, MensajeTablaVaciaComponent, OrderListClientesPipe, NgxPaginationModule]
})
export class TableDatosClientesComponent {

  @Input() nombrePagina:  String = '';
  @Input() dataClientes:  Array<clienteModel> = [];
  @Input() isLoading : boolean = true;

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }

  @Input() pParemetro: number = 1;
  @Input() cantidadPaginas: number = 1;

  collection: any[] = this.dataClientes;

  //============================================================================
  // FUNCIÓN PARA EJECUTAR UNA FUNCIÓN DEL COMPONENTE HIJO AL PADRE
  //============================================================================

  @Output() cerrarUpdateComponenteEvent = new EventEmitter<void>();
  cerrarUpdateComponente(id_Clientes: any) {
    this.cerrarUpdateComponenteEvent.emit(id_Clientes);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_Clientes: any) {
    this.btnBuscarMarcaId.emit(id_Clientes)
  }
}
