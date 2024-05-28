import { Component, EventEmitter, Input, Output } from '@angular/core';

import { OrderListMarcaAutosPipe } from '../../../../../../../shared/pipes/order/marca-autos/order-list-marca-autos.pipe';
import { CommonModule, NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { FormsModule } from '@angular/forms';
import { marcaAutosModel } from '../../../../../../../../domain/models/marcas-autos/marca-autos.model';

@Component({
    selector: 'app-table-datos-marcas-autos',
    templateUrl: './table-datos-marcas-autos.component.html',
    styleUrls: ['./table-datos-marcas-autos.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListMarcaAutosPipe, FormsModule, CommonModule]
})
export class TableDatosMarcasAutosComponent {
  @Input() dataMarcaAutos:  Array<marcaAutosModel> = [];

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
  cerrarUpdateComponente(id_marca: any) {
    this.cerrarUpdateComponenteEvent.emit(id_marca);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_marca: any) {
    this.btnBuscarMarcaId.emit(id_marca)
  }
}
