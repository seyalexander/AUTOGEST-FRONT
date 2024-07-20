import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detalleServiciosReparacionGateway } from '../../../domain/models/Detalle_servicios_Servicio/gateway/Detalle_servicio_servicios_gateway';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { detalleServiciosReparacionModel } from '../../../domain/models/Detalle_servicios_Servicio/detalle_servicio_servicio.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleServiciosService extends detalleServiciosReparacionGateway{

  private URL = environment.api;

  override newDetalleServicios(detalleServicios: detalleServiciosReparacionModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarDetalleServicio`, detalleServicios)
  }
  constructor(private httpClient: HttpClient) {
    super();
  }
}
