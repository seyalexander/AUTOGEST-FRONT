import { familiaProductoModel } from "../familia-productos/familiaProductos.model"

export class productosModel {
  id_Producto: string | number = 0
  nombre: string = ''
  descripcion: string = ''
  idFamiliaFk: familiaProductoModel = {} as familiaProductoModel
}
