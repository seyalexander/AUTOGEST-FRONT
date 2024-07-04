import { Observable } from "rxjs";
import { citasModel } from "../citas.model";

export abstract class citasGateway {
  abstract getById(id: number): Observable<Array<citasModel>>;
  abstract newCita(citas: citasModel): Observable<Object>;
  abstract citasEntregadas(): Observable<Array<citasModel>>;
  abstract getByIdUnique(id: number): Observable<citasModel>;
}
