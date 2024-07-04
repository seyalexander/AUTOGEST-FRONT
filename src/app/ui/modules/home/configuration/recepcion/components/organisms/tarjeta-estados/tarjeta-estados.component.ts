import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { recepcionModel } from '../../../../../../../../domain/models/recepcion/recepcion.model';
import { MensajeSinDatosComponent } from '../mensaje-sin-datos/mensaje-sin-datos.component';

@Component({
  selector: 'app-tarjeta-estados',
  standalone: true,
  imports: [MensajeSinDatosComponent],
  templateUrl: './tarjeta-estados.component.html',
  styleUrl: './tarjeta-estados.component.css'
})
export class TarjetaEstadosComponent {
  @Input() dataTarjeta: Array<recepcionModel> = [];
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

}
