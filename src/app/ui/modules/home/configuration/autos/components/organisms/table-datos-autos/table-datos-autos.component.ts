import { Component, EventEmitter, Input, Output } from '@angular/core';

import { OrderListAutosPipe } from '../../../../../../../shared/pipes/order/autos/order-list-autos.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { autosModel } from '../../../../../../../../domain/models/autos/autos.model';

@Component({
    selector: 'app-table-datos-autos',
    templateUrl: './table-datos-autos.component.html',
    styleUrls: ['./table-datos-autos.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListAutosPipe]
})
export class TableDatosAutosComponent {
  @Input() dataAutos:  Array<autosModel> = [];

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
  cerrarUpdateComponente(id_Auto: any) {
    this.cerrarUpdateComponenteEvent.emit(id_Auto);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_Auto: any) {
    this.btnBuscarMarcaId.emit(id_Auto)
  }
}
