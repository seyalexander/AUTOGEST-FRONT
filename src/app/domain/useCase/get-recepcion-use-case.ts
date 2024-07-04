import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { recepcionModel } from "../models/recepcion/recepcion.model";
import { recepcionGateway } from "../models/recepcion/gateway/recepcion-gateway";

@Injectable({
  providedIn: 'root'
})

export class GetRecepcionUseCase {
  constructor( private _recepcionGateWay: recepcionGateway) {}

  getRecepcion (): Observable <Array<recepcionModel>> {
    return this._recepcionGateWay.getRecepcion();
  }

  newRecepcion(recepcion: recepcionModel): Observable<Object> {
    return this._recepcionGateWay.newRecepcion(recepcion)
  }

  getByIdUnique(id: number): Observable<recepcionModel> {
    return this._recepcionGateWay.getByIdUnique(id)
  }
}
