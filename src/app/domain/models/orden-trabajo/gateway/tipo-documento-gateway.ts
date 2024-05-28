import { Observable } from "rxjs";
import { ordenTrabajoModel } from "../orden-trabajo.model";

export abstract class ordenTrabajoGateway {
  abstract getAll(): Observable<Array<ordenTrabajoModel>>;
  abstract newOrdenProducto(ordenTrabajo: ordenTrabajoModel): Observable<Object>;
}
