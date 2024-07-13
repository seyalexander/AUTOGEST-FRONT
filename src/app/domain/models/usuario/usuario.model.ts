import { empleadoModel } from "../empleado/empleado.model";
import { rolUsuarioModel } from "../rol-usuario/rol-usaurio.model";

export class usuarioModel {
  Id_Usuario: number = 0;
  Usuario: string = '';
  Clave: string = '';
  Estado: number = 1;
  Id_Rol_Usuario_Fk: rolUsuarioModel = {} as rolUsuarioModel;
  Id_Empleado_Fk: empleadoModel = {} as empleadoModel;
}
