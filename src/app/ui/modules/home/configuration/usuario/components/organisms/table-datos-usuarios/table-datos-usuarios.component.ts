import { Component, Input } from '@angular/core';

import { OrderListUsuarioPipe } from '../../../../../../../shared/pipes/order/usuario/order-list-usuario.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { usuarioModel } from '../../../../../../../../domain/models/usuario/usuario.model';

@Component({
    selector: 'app-table-datos-usuarios',
    templateUrl: './table-datos-usuarios.component.html',
    styleUrls: ['./table-datos-usuarios.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListUsuarioPipe]
})
export class TableDatosUsuariosComponent {
  @Input() dataUsuarios:  Array<usuarioModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }

}
