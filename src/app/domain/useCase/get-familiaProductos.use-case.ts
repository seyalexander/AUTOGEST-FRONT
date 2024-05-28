
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { familiaProductosGateway } from '../models/familia-productos/gateway/familiaProductos-gateway';
import { familiaProductoModel } from '../models/familia-productos/familiaProductos.model';



@Injectable({
  providedIn: 'root'
})

export class GetFamiliaProductosUseCases {

  constructor( private _familiaProductosGateWay: familiaProductosGateway) {}

  getAllFamiliaProductos () : Observable <Array<familiaProductoModel>> {
    return this._familiaProductosGateWay.getAllFamiliaProductos();
  }

  newFamiliaProductos(familiaProductos: familiaProductoModel): Observable<Object> {
    return this._familiaProductosGateWay.newFamiliaProductos(familiaProductos)
  }

  getById(id: number): Observable<familiaProductoModel> {
    return this._familiaProductosGateWay.getById(id)
  }

  updateFamiliaProductos(id: number, familiaProductos: familiaProductoModel): Observable<Object> {
    return this._familiaProductosGateWay.updateFamiliaProductos(id, familiaProductos)
  }

  // newCliente (cliente: clienteModel) : Observable <object> {
  //   return this._familiaProductosGateWay.newCliente(cliente);
  // }

}
