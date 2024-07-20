import { productosModel } from "../productos/productos.model";
import { reparacionModel } from "../reparacion/reparacion.model";

export class detalleServiciosReparacionModel {
  servicioRealizado: reparacionModel = {} as reparacionModel;
  id_Detalle_Servicio: number = 0
  detalle_Servicio: string = ''
  precio_Servicio: number = 0.0
}
