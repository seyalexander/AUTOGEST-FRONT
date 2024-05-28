import { Detalle_Empleado_ServicioModel } from './../Detalle_Empleado_Servici/Detalle_Empleado_Servicio.model';
import { clienteModel } from "../clientes/clientes.model";
import { detalleServicioModel } from "../detalleServicio/detalle.mode";
import { empleadoModel } from "../empleado/empleado.model";
import { ordenTrabajoModel } from "../orden-trabajo/orden-trabajo.model";
import { productosModel } from "../productos/productos.model";

export class reparacionModel {

  listaEmpleado: Array<Detalle_Empleado_ServicioModel> = [];
  listaServicio: Array<detalleServicioModel> = [];

  id_Servicio: number = 0;
  detalle_Servicio: String = '';
  costo_Producto_Total: number = 0.0
  costo_Servicio_Total: number = 0.0;
  costo_Total: number = 0.0;
  id_Orden_Ingreso_Fk: ordenTrabajoModel = {} as ordenTrabajoModel;
  id_Producto_Fk: productosModel = {} as productosModel;
  fecha_Entrega: string = '';
}
