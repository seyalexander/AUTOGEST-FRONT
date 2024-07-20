import { Observable } from "rxjs";
import { Detalle_Empleado_ServicioModel } from "../Detalle_Empleado_Servicio.model";

export abstract class detalleEmpleadoGateway {
  abstract newDetalleEmpleado(detalleEmpleado: Detalle_Empleado_ServicioModel): Observable<Object>;
}
