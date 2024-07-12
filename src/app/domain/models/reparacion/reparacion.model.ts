import { detalleServicioModel } from "../detalleServicio/detalle.mode";
import { empleadoModel } from "../empleado/empleado.model";
import { ordenTrabajoModel } from "../orden-trabajo/orden-trabajo.model";
import { productosModel } from "../productos/productos.model";
import { listaEmpleado } from './listaEmpleado.model';

export class reparacionModel {

  listaEmpleado: Array<listaEmpleado> = []; //nel
  listaServicio: Array<detalleServicioModel> = []; // nel
  id_Servicio: number = 0; // nel
  detalle_Servicio: String = ''; // nel
  costo_Producto_Total: number = 0.0
  costo_Servicio_Total: number = 0.0;
  costo_Total: number = 0.0;
  id_empleado_fk: empleadoModel = {} as empleadoModel;
  id_Orden_Ingreso_Fk: ordenTrabajoModel = {} as ordenTrabajoModel;
  id_Producto_Fk: productosModel = {} as productosModel; // nel
  fecha_Entrega: string = '';
  hora_Entrega: string = '';
}
