import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { familiaProductoModel } from '../../../../../../../../domain/models/familia-productos/familiaProductos.model';


@Component({
  selector: 'app-table-datos-familia-productos',
  standalone: true,
  imports: [CommonModule, ThTablesIconTextComponent, NgFor],
  templateUrl: './table-datos-familia-productos.component.html',
  styleUrls: ['./table-datos-familia-productos.component.css'],
})
export class TableDatosFamiliaProductosComponent {
  @Input() dataFamiliaProductos:  Array<familiaProductoModel> = [];

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
  cerrarUpdateComponente(id_FamiliaProductos: any) {
    this.cerrarUpdateComponenteEvent.emit(id_FamiliaProductos);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_FamiliaProductos: any) {
    this.btnBuscarMarcaId.emit(id_FamiliaProductos)
  }

}
