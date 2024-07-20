import { Observable } from "rxjs";
import { detalleProductosModel } from "../detalle_productos.mode";

export abstract class detalleProductosGateway {
  abstract newDetalleProducto(detalleProducto: detalleProductosModel): Observable<Object>;
}
