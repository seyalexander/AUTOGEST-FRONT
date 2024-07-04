import { empleadoModel } from "../empleado/empleado.model";
import { recepcionModel } from "../recepcion/recepcion.model";

export class preDiagnosticoModel {
  id_Recepcion_Fk: recepcionModel = {} as recepcionModel
  repuestos: string = ''
  descripcionRepuestos: string = ''
  costoDiagnostico: string = ''
  costo: string = ''
  fechaDiagnostico: string = ''
  horaDiagnostico: string = ''
  fecha: string = ''
  hora: string = ''
  id_Prediagnostico: number = 0
  problema: string = ''
  servicios: string = ''
  id_Empleado_Fk: empleadoModel = {} as empleadoModel
}
