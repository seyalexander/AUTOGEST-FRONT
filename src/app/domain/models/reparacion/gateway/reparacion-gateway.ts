import { Observable } from "rxjs";
import { reparacionModel } from "../reparacion.model";

export abstract class reparacionGateway {
  abstract getAll(): Observable<Array<reparacionModel>>;
  abstract newReparacion(reparacion: reparacionModel): Observable<Object>;
  abstract getById(id: number): Observable<reparacionModel>;
  abstract updateReparacion(id_Reparacion: number, reparacion: reparacionModel): Observable<Object>;
}
