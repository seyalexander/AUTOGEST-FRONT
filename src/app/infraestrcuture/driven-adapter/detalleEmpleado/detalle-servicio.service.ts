import { Injectable } from '@angular/core';
import { detalleEmpleadoGateway } from '../../../domain/models/Detalle_Empleado_Servici/gateway/Detalle_Empleado_Servicio-gateway';
import { Observable } from 'rxjs';
import { Detalle_Empleado_ServicioModel } from '../../../domain/models/Detalle_Empleado_Servici/Detalle_Empleado_Servicio.model';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleServicioService extends detalleEmpleadoGateway{
  private URL = environment.api;
  override newDetalleEmpleado(detalleEmpleado: Detalle_Empleado_ServicioModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarDetalleEmpleadoServicio`, detalleEmpleado)
  }
  constructor(private httpClient: HttpClient) {
    super();
  }
}
