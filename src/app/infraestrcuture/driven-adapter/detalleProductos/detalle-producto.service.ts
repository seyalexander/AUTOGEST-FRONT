import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { detalleProductosGateway } from '../../../domain/models/Detalle_productos_servicio/gateway/Detalle_productos_servicio.model';
import { Observable } from 'rxjs';
import { detalleProductosModel } from '../../../domain/models/Detalle_productos_servicio/detalle_productos.mode';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleProductoService extends detalleProductosGateway {

  private URL = environment.api;

  override newDetalleProducto(detalleProducto: detalleProductosModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarDetalleProductos`, detalleProducto)
  }
  constructor(private httpClient: HttpClient) {
    super();
  }
}
