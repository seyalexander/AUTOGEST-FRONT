import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { empleadoGateway } from '../models/empleado/gateway/empleado-gateway';
import { empleadoModel } from '../models/empleado/empleado.model';



@Injectable({
  providedIn: 'root'
})

export class GetTipoEmpleadosUseCases {

  constructor( private _empleadoGateWay: empleadoGateway) {}

  getAllEmpleados () : Observable <Array<empleadoModel>> {
    return this._empleadoGateWay.getAllEmpleados();
  }

  newEmpleado (empleado: empleadoModel) : Observable <object> {
    return this._empleadoGateWay.newEmpleado(empleado);
  }

  getById (id: number): Observable <empleadoModel> {
    return this._empleadoGateWay.getById(id);
  }

  updateMarcaAutos (id_Empleado: number, empleado: empleadoModel) : Observable <object> {
    return this._empleadoGateWay.updateEmpleados(id_Empleado, empleado)
  }
}
