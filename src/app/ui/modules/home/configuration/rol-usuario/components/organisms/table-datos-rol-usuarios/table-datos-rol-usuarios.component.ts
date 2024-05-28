import { Component, EventEmitter, Input, Output } from '@angular/core';

import { OrderListRolUsuarioPipe } from '../../../../../../../shared/pipes/order/rol-usuario/order-list-rol-usuario.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { rolUsuarioModel } from '../../../../../../../../domain/models/rol-usuario/rol-usaurio.model';

@Component({
    selector: 'app-table-datos-rol-usuarios',
    templateUrl: './table-datos-rol-usuarios.component.html',
    styleUrls: ['./table-datos-rol-usuarios.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListRolUsuarioPipe]
})
export class TableDatosRolUsuariosComponent {
  @Input() dataRolUsuarios: Array<rolUsuarioModel> = [];

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
  cerrarUpdateComponente(id_Rol: any) {
    this.cerrarUpdateComponenteEvent.emit(id_Rol);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_Rol: any) {
    this.btnBuscarMarcaId.emit(id_Rol)
  }
}
