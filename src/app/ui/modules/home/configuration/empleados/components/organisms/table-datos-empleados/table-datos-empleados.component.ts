import { Component, EventEmitter, Input, Output } from '@angular/core';

import { OrderListEmpleadosPipe } from '../../../../../../../shared/pipes/order/empleados/order-list-empleados.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';

@Component({
    selector: 'app-table-datos-empleados',
    templateUrl: './table-datos-empleados.component.html',
    styleUrls: ['./table-datos-empleados.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListEmpleadosPipe]
})
export class TableDatosEmpleadosComponent {
  @Input() dataEmpleados:  Array<empleadoModel> = [];

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
  cerrarUpdateComponente(id_empleado: any) {
    this.cerrarUpdateComponenteEvent.emit(id_empleado);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_empleado: any) {
    this.btnBuscarMarcaId.emit(id_empleado)
  }
}
