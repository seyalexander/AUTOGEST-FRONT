import { empleadoModel } from "../empleado/empleado.model";

export class Detalle_Empleado_ServicioModel {
  id_Detalle_Empleado_Servicio: number = 0;
  id_Empleado_Fk:empleadoModel = {} as empleadoModel;
}
