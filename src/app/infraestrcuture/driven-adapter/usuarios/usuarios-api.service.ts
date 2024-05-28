import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../data/usuarios.json';
import { usuariosGateway } from '../../../domain/models/usuario/gateway/usuario-gateway';
import { usuarioModel } from '../../../domain/models/usuario/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosApiService extends usuariosGateway {

  override getAll(): Observable<usuarioModel[]> {
    const { data }: any = (dataRaw as any).default;
     return of(data);
   }

  constructor() {
    super();
  }
}
