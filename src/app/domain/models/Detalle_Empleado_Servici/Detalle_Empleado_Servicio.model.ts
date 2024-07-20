import { empleadoModel } from "../empleado/empleado.model";
import { reparacionModel } from "../reparacion/reparacion.model";

export class Detalle_Empleado_ServicioModel {
  id_Detalle_Empleado_Servicio: number = 0;
  id_Empleado_Fk:empleadoModel = {} as empleadoModel;
  servicioRealizado: reparacionModel = {} as reparacionModel;
}
