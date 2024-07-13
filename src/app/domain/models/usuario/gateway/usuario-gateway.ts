import { Observable } from "rxjs";
import { usuarioModel } from "../usuario.model";


export abstract class usuariosGateway {
  abstract getAll(): Observable<Array<usuarioModel>>;
  abstract newUsuario(usuarios: usuarioModel): Observable<Object>;
}
