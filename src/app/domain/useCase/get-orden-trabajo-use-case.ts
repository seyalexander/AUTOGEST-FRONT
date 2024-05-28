import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ordenTrabajoGateway } from '../models/orden-trabajo/gateway/tipo-documento-gateway';
import { ordenTrabajoModel } from '../models/orden-trabajo/orden-trabajo.model';


@Injectable({
  providedIn: 'root'
})

export class GetOrdenTrabajoUseCases {

  constructor( private _ordenTrabajoGateWay: ordenTrabajoGateway) {}

  getAllOrdenTrabajo () : Observable <Array<ordenTrabajoModel>> {
    return this._ordenTrabajoGateWay.getAll();
  }

  newOrdenTrabajo(ordenTrabajo: ordenTrabajoModel): Observable<Object> {
    return this._ordenTrabajoGateWay.newOrdenProducto(ordenTrabajo)
  }

}
