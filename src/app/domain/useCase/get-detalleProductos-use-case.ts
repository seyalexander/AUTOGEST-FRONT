import { Detalle_Empleado_ServicioModel } from './../models/Detalle_Empleado_Servici/Detalle_Empleado_Servicio.model';
import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { empleadoGateway } from '../models/empleado/gateway/empleado-gateway';
import { empleadoModel } from '../models/empleado/empleado.model';
import { detalleEmpleadoGateway } from '../models/Detalle_Empleado_Servici/gateway/Detalle_Empleado_Servicio-gateway';
import { detalleProductosGateway } from '../models/Detalle_productos_servicio/gateway/Detalle_productos_servicio.model';
import { detalleProductosModel } from '../models/Detalle_productos_servicio/detalle_productos.mode';



@Injectable({
  providedIn: 'root'
})

export class GetDetalleProductosUseCases {

  constructor( private _detalleProductosGateWay: detalleProductosGateway) {}

  newDetalleProductos (detalleProductos: detalleProductosModel) : Observable <object> {
    return this._detalleProductosGateWay.newDetalleProducto(detalleProductos);
  }
}
