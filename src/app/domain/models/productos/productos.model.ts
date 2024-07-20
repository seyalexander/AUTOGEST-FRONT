import { familiaProductoModel } from "../familia-productos/familiaProductos.model"

export class productosModel {
  id_Producto: number = 0
  nombre: string = ''
  descripcion: string = ''
  cantidad: number = 0
  precio: number = 0
  idFamiliaFk: familiaProductoModel = {} as familiaProductoModel
}
