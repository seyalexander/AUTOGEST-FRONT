import { autosModel } from "../autos/autos.model";
import { choferesModel } from "../choferes/choferes.model";
import { empleadoModel } from "../empleado/empleado.model";

export class ordenTrabajoModel {
  id_Orden_Ingreso: String | number = '';
  Numero_Orden: number = 0;
  Fecha_Entrada: String = '';
  descripcion_Problema: String = '';
  Estado_Orden: number = 0;
  id_Auto_Fk: autosModel = {} as autosModel;
  id_Empleado_Fk: empleadoModel = {} as empleadoModel;
  id_Chofer_Fk: choferesModel = {} as choferesModel;
}
