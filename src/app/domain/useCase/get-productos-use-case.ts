
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productosGateway } from '../models/productos/gateway/productos-gateway';
import { productosModel } from '../models/productos/productos.model';


@Injectable({
  providedIn: 'root'
})

export class GetProductosUseCases {

  constructor( private _productosGateWay: productosGateway) {}

  getAllProductos () : Observable <Array<productosModel>> {
    return this._productosGateWay.getAllProductos();
  }

  newProductos(productos: productosModel): Observable<Object> {
    return this._productosGateWay.newProducto(productos)
  }

  getById(id: number): Observable<productosModel> {
    return this._productosGateWay.getById(id)
  }

  updateProductos(id: number, productos: productosModel): Observable<Object> {
    return this._productosGateWay.updateProductos(id, productos)
  }

  // newCliente (cliente: clienteModel) : Observable <object> {
  //   return this._familiaProductosGateWay.newCliente(cliente);
  // }

}
