import { Observable } from "rxjs";
import { familiaProductoModel } from "../familiaProductos.model";

export abstract class familiaProductosGateway {
  abstract getAllFamiliaProductos(): Observable<Array<familiaProductoModel>>;
  abstract newFamiliaProductos(familiaProductos: familiaProductoModel): Observable<Object>;
  abstract getById(id: number): Observable<familiaProductoModel>;
  abstract updateFamiliaProductos(id: number, familiaProductos: familiaProductoModel): Observable<Object>;
}
