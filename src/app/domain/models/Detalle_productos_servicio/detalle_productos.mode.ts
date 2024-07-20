import { productosModel } from "../productos/productos.model";
import { reparacionModel } from "../reparacion/reparacion.model";

export class detalleProductosModel {
  servicioRealizado: reparacionModel = {} as reparacionModel;
  id_Detalle_Productos: number = 0
  precio_Producto: number = 0.0
  cantidad: number = 0
  id_Producto_Fk: productosModel = {} as productosModel;
}
