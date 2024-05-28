import { Component, EventEmitter, Input, Output } from '@angular/core';

import { OrderListModeloAutosPipe } from '../../../../../../../shared/pipes/order/modelo-autos/order-list-modelo-autos.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { modeloAutosModel } from '../../../../../../../../domain/models/modelo-autos/modelo-autos.model';


@Component({
    selector: 'app-tabla-datos-modelos-autos',
    templateUrl: './tabla-datos-modelos-autos.component.html',
    styleUrls: ['./tabla-datos-modelos-autos.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListModeloAutosPipe]
})
export class TablaDatosModelosAutosComponent {
  @Input() dataModeloAutos:  Array<modeloAutosModel> = [];

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
  cerrarUpdateComponente(id_Modelo: any) {
    this.cerrarUpdateComponenteEvent.emit(id_Modelo);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_Modelo: any) {
    this.btnBuscarMarcaId.emit(id_Modelo)
  }
}
