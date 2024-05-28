import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { productosModel } from '../../../../../../../../domain/models/productos/productos.model';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';


@Component({
  selector: 'app-table-datos-productos',
  standalone: true,
  imports: [CommonModule,ThTablesIconTextComponent, NgFor],
  templateUrl: './table-datos-productos.component.html',
  styleUrls: ['./table-datos-productos.component.css']
})
export class TableDatosProductosComponent {
  @Input() dataProductos:  Array<productosModel> = [];

  //============================================================================
  // FUNCIÓN PARA EJECUTAR UNA FUNCIÓN DEL COMPONENTE HIJO AL PADRE
  //============================================================================

  @Output() cerrarUpdateComponenteEvent = new EventEmitter<void>();
  cerrarUpdateComponente(id_Productos: any) {
    this.cerrarUpdateComponenteEvent.emit(id_Productos);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_Productos: any) {
    this.btnBuscarMarcaId.emit(id_Productos)
  }
}
