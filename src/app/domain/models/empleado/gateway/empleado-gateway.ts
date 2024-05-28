import { Observable } from "rxjs";
import { empleadoModel } from "../empleado.model";

export abstract class empleadoGateway {
  abstract getAllEmpleados(): Observable<Array<empleadoModel>>;
  abstract newEmpleado(empleado: empleadoModel): Observable<Object>;
  abstract getById(id: number): Observable<empleadoModel>;
  abstract updateEmpleados(id: number, empleados: empleadoModel): Observable<Object>;
}
