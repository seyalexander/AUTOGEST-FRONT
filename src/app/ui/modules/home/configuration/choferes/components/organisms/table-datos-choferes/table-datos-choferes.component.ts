import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';
import { OrderListAutosPipe } from '../../../../../../../shared/pipes/order/autos/order-list-autos.pipe';
import { choferesModel } from '../../../../../../../../domain/models/choferes/choferes.model';


@Component({
  selector: 'app-table-datos-choferes',
  standalone: true,
  imports: [ThTablesIconTextComponent, NgFor, OrderListAutosPipe, CommonModule],
  templateUrl: './table-datos-choferes.component.html',
  styleUrls: ['./table-datos-choferes.component.css']
})
export class TableDatosChoferesComponent {
  @Input() dataChoferes:  Array<choferesModel> = [];
  @Input() isLoading: boolean = false;
  @Input() isNotConexion: boolean = false;
  fechaActual: string = ''

  ngOnInit(): void {
    const currentDate = new Date();
    const fechaActual = currentDate.toISOString().split('T')[0];
    this.fechaActual = fechaActual
  }


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
  cerrarUpdateComponente(id_chofer: any) {
    this.cerrarUpdateComponenteEvent.emit(id_chofer);
  }

  //============================================================================
  // FUNCIÓN PARA MMANDAR LA INFORMACIÓN DEL ITEM SELECCIONADO
  //============================================================================

  @Output() btnBuscarMarcaId = new EventEmitter<number>();
  getById (id_Chofer: any) {
    this.btnBuscarMarcaId.emit(id_Chofer)
  }
}
