import { Observable } from "rxjs";
import { detalleServiciosReparacionModel } from "../detalle_servicio_servicio.model";

export abstract class detalleServiciosReparacionGateway {
  abstract newDetalleServicios(detalleServicios: detalleServiciosReparacionModel): Observable<Object>;
}
