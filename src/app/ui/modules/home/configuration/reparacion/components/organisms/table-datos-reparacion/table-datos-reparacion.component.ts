import { Component, EventEmitter, Input, Output } from '@angular/core';

import { OrderListReparacionPipe } from '../../../../../../../shared/pipes/order/reparacion/order-list-reparacion.pipe';
import { CommonModule, NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { reparacionModel } from '../../../../../../../../domain/models/reparacion/reparacion.model';

@Component({
    selector: 'app-table-datos-reparacion',
    templateUrl: './table-datos-reparacion.component.html',
    styleUrls: ['./table-datos-reparacion.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListReparacionPipe, CommonModule]
})
export class TableDatosReparacionComponent {
  @Input() dataReparacion:  Array<reparacionModel> = [];

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
  cerrarUpdateComponente(id_Reparacion: any) {
    this.cerrarUpdateComponenteEvent.emit(id_Reparacion);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_Reparacion: any) {
    this.btnBuscarMarcaId.emit(id_Reparacion)
  }

  ngOnInit() {
    console.log("Desde la tabla: ", this.dataReparacion);
  }
}
