import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MensajeSinDatosComponent } from '../mensaje-sin-datos/mensaje-sin-datos.component';
import { preDiagnosticoModel } from '../../../../../../../../domain/models/preDiagnostico/preDiagnostico.model';

@Component({
  selector: 'app-tarjeta-diagnostico',
  standalone: true,
  imports: [MensajeSinDatosComponent],
  templateUrl: './tarjeta-diagnostico.component.html',
  styleUrl: './tarjeta-diagnostico.component.css'
})
export class TarjetaDiagnosticoComponent {
  @Input() dataDiagnostico:  Array<preDiagnosticoModel> = [];

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

  @Output() btnBuscarDiagnosticoId = new EventEmitter<number>();
  getById (id_Diagnostico: any) {
    this.btnBuscarDiagnosticoId.emit(id_Diagnostico)
  }

  ngOnInit() {

  }
}
