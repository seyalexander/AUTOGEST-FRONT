import { clienteModel } from "../clientes/clientes.model";
import { empleadoModel } from "../empleado/empleado.model";
import { rolUsuarioModel } from "../rol-usuario/rol-usaurio.model";

export class usuarioModel {
  id_Usuarios: number = 0;
  username: string = '';
  password: string = '';
  Estado: number = 1;
  idRolesFK: rolUsuarioModel = {} as rolUsuarioModel;
  idEmpleadoFK: empleadoModel = {} as empleadoModel;
  idClienteFK: clienteModel = {} as clienteModel;
}
