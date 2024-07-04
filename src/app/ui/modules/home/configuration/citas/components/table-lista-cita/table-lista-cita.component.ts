import { Component, EventEmitter, Input, Output } from '@angular/core';
import { citasModel } from '../../../../../../../domain/models/citas/citas.model';
import { ThTablesIconTextComponent } from '../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { OrderListReparacionPipe } from '../../../../../../shared/pipes/order/reparacion/order-list-reparacion.pipe';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-table-lista-cita',
  standalone: true,
  imports: [ThTablesIconTextComponent, OrderListReparacionPipe, CommonModule, NgFor],
  templateUrl: './table-lista-cita.component.html',
  styleUrl: './table-lista-cita.component.css'
})
export class TableListaCitaComponent {
  @Input() dataCitas:  Array<citasModel> = [];

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
