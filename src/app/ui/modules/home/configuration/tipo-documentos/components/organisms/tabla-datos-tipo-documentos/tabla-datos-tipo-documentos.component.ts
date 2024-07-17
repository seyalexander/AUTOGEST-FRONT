import { Component, EventEmitter, Input, Output } from '@angular/core';

import { OrderListTipoDocumentoPipe } from '../../../../../../../shared/pipes/order/tipo-documento/order-list-tipo-documento.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { tipoDocumentosModel } from '../../../../../../../../domain/models/tipo-documentos/tipo-documentos.model';

@Component({
    selector: 'app-tabla-datos-tipo-documentos',
    templateUrl: './tabla-datos-tipo-documentos.component.html',
    styleUrls: ['./tabla-datos-tipo-documentos.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListTipoDocumentoPipe]
})
export class TablaDatosTipoDocumentosComponent {
  @Input() dataTipoDocumento:  tipoDocumentosModel = {} as tipoDocumentosModel;

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
  cerrarUpdateComponente(id_tipoDocumento: any) {
    this.cerrarUpdateComponenteEvent.emit(id_tipoDocumento);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_tipoDocumento: any) {
    this.btnBuscarMarcaId.emit(id_tipoDocumento)
  }
}
