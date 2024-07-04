import { citasModel } from "../citas/citas.model"
import { empleadoModel } from "../empleado/empleado.model"

export class recepcionModel {
  id_Recepcion: number = 0
  fecha: String = ''
  hora: String = ''
  id_Cita_Fk: citasModel = {} as citasModel
  id_Empleado_Fk: empleadoModel = {} as empleadoModel
}
