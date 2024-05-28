import { empleadoModel } from "../empleado/empleado.model";
import { productosModel } from "../productos/productos.model";

export class detalleServicioModel {
  id_Detalle_Empleado_Servicio: number = 0;
  servicioRealizado: string = '';
  detalle_Servicio: string = '';
  subtotal_Producto: number = 0.0;
  id_Servicio_Fk: string = '';
  id_Producto_Fk: productosModel = {} as productosModel;
  id_Empleado_Fk: Array<empleadoModel> = [];
  precio_Cantidad: number = 0.0;
  precio_Producto: number = 0.0;
  precio_Servicio: number = 0.0;
}
