import { empleadoModel } from "../empleado/empleado.model";
import { preDiagnosticoModel } from "../preDiagnostico/preDiagnostico.model";

export class ordenTrabajoModel {
  fechaIngreso: string = '';
  horaIngreso: string = '';
  fechaEntrega: string = '';
  horaEntrega: string = '';
  id_Prediagnostico_Fk: preDiagnosticoModel = {} as preDiagnosticoModel;
  id_Empleado_Fk: empleadoModel = {} as empleadoModel;
  id_Orden_Ingreso: number = 0;
}
