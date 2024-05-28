import { Component, EventEmitter, Input, Output } from '@angular/core';

import { OrderListOrdenTrabajoPipe } from '../../../../../../../shared/pipes/order/orden-trabajo/order-list-orden-trabajo.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { ordenTrabajoModel } from '../../../../../../../../domain/models/orden-trabajo/orden-trabajo.model';

@Component({
    selector: 'app-table-datos-orden-trabajo',
    templateUrl: './table-datos-orden-trabajo.component.html',
    styleUrls: ['./table-datos-orden-trabajo.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListOrdenTrabajoPipe]
})
export class TableDatosOrdenTrabajoComponent {
  @Input() dataOrdenTrabajo:  Array<ordenTrabajoModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }

  //============================================================================
  // FUNCIÓN PARA EJECUTAR UNA FUNCIÓN DEL COMPONENTE HIJO AL PADRE
  //============================================================================

  @Output() cerrarUpdateComponenteEvent = new EventEmitter<void>();
  cerrarUpdateComponente(id_Orden: any) {
    this.cerrarUpdateComponenteEvent.emit(id_Orden);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_Orden: any) {
    this.btnBuscarMarcaId.emit(id_Orden)
  }
}
