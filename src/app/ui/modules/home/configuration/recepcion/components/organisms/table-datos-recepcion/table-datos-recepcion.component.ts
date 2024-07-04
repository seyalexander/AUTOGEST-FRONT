import { Component, EventEmitter, Input, Output } from '@angular/core';
import { recepcionModel } from '../../../../../../../../domain/models/recepcion/recepcion.model';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { OrderListReparacionPipe } from '../../../../../../../shared/pipes/order/reparacion/order-list-reparacion.pipe';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-table-datos-recepcion',
  standalone: true,
  imports: [ThTablesIconTextComponent, OrderListReparacionPipe, CommonModule, NgFor],
  templateUrl: './table-datos-recepcion.component.html',
  styleUrl: './table-datos-recepcion.component.css'
})
export class TableDatosRecepcionComponent {
  @Input() dataRecepcion:  Array<recepcionModel> = [];

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
  cerrarUpdateComponente(id_Recepcion: any) {
    this.cerrarUpdateComponenteEvent.emit(id_Recepcion);
  }

  //============================================================================
  // FUNCIÓN PARA MANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarRecepcionId = new EventEmitter<number>();
  getById (id_Repcepcion: any) {
    this.btnBuscarRecepcionId.emit(id_Repcepcion)
  }

  ngOnInit() {

  }
}
