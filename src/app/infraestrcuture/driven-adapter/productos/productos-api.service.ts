import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { productosGateway } from '../../../domain/models/productos/gateway/productos-gateway';
import { productosModel } from '../../../domain/models/productos/productos.model';


@Injectable({
  providedIn: 'root'
})
export class ProductosApiService extends productosGateway {

  private URL = environment.api;

  override getAllProductos(): Observable<productosModel[]> {
    return this.httpClient.get<productosModel[]>(`${this.URL}/MostrarProducto`)
  }

  override newProducto(productos: productosModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarProducto`,productos)
  }

  override getById(id: number): Observable<productosModel> {
    return this.httpClient.get<productosModel>(`${this.URL}/BuscarProducto/${id}`)
  }

  override updateProductos(id_Producto: number, productos: productosModel): Observable<Object> {
    return this.httpClient.put(`${this.URL}/ActualizarProducto/${id_Producto}`, productos)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
