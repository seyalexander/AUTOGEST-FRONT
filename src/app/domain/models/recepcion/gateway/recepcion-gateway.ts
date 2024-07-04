import { Observable } from "rxjs";
import { recepcionModel } from "../recepcion.model";

export abstract class recepcionGateway {
  abstract getRecepcion(): Observable<Array<recepcionModel>>;
  abstract newRecepcion(recepcion: recepcionModel): Observable<Object>;
  abstract getByIdUnique(id: number): Observable<recepcionModel>;
}
