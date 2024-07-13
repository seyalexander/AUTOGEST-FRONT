import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../data/usuarios.json';
import { usuariosGateway } from '../../../domain/models/usuario/gateway/usuario-gateway';
import { usuarioModel } from '../../../domain/models/usuario/usuario.model';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosApiService extends usuariosGateway {

  private URL = environment.api;

  override getAll(): Observable<usuarioModel[]> {
    return this.httpClient.get<usuarioModel[]>(`${this.URL}/MostrarUsuarios`)
   }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
