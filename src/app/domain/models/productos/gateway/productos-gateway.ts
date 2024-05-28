import { Observable } from "rxjs";
import { productosModel } from "../productos.model";

export abstract class productosGateway {
  abstract getAllProductos(): Observable<Array<productosModel>>
  abstract newProducto(productos: productosModel): Observable<Object>;
  abstract getById(id: number): Observable<productosModel>;
  abstract updateProductos(id_Producto: number, productos: productosModel): Observable<Object>;
}
