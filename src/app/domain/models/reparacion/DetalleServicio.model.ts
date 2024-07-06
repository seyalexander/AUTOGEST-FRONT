import { productosModel } from "../productos/productos.model"
import { reparacionModel } from "./reparacion.model"

export class DetalleServicioModel {
  Id_Detalle_Servicio: number = 0
  Id_Producto_Fk: productosModel = {} as productosModel
  Detalle_Servicio: string = ''
  Precio_Servicio: number = 0.0
  Precio_Producto: number = 0.0
  Precio_Cantidad: number = 0
  Subtotal_Producto: number = 0.0
  Id_Servicio_FK: reparacionModel = {} as reparacionModel
}
