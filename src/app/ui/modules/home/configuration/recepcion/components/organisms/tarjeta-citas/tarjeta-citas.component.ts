import { Component, EventEmitter, Input, Output } from '@angular/core';
import { citasModel } from '../../../../../../../../domain/models/citas/citas.model';
import { MensajeSinDatosComponent } from '../mensaje-sin-datos/mensaje-sin-datos.component';
import { RegistrarDiagnosticoComponent } from '../registrar-diagnostico/registrar-diagnostico.component';

@Component({
  selector: 'app-tarjeta-citas',
  standalone: true,
  imports: [
    MensajeSinDatosComponent,
    RegistrarDiagnosticoComponent
  ],
  templateUrl: './tarjeta-citas.component.html',
  styleUrl: './tarjeta-citas.component.css'
})
export class TarjetaCitasComponent {
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

  @Output() btnBuscarCitaId = new EventEmitter<number>();
  getById (id_Repcepcion: any) {
    this.btnBuscarCitaId.emit(id_Repcepcion)
  }

  ngOnInit() {


  }
}
