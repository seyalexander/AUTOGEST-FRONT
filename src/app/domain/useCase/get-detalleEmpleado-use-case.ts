import { Detalle_Empleado_ServicioModel } from './../models/Detalle_Empleado_Servici/Detalle_Empleado_Servicio.model';
import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { empleadoGateway } from '../models/empleado/gateway/empleado-gateway';
import { empleadoModel } from '../models/empleado/empleado.model';
import { detalleEmpleadoGateway } from '../models/Detalle_Empleado_Servici/gateway/Detalle_Empleado_Servicio-gateway';



@Injectable({
  providedIn: 'root'
})

export class GetDetalleEmpleadosUseCases {

  constructor( private _detalleEmpleadoGateWay: detalleEmpleadoGateway) {}

  newDetalleEmpleado (detalleEmpleado: Detalle_Empleado_ServicioModel) : Observable <object> {
    return this._detalleEmpleadoGateWay.newDetalleEmpleado(detalleEmpleado);
  }
}
