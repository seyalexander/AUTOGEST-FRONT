import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { reparacionModel } from '../../../domain/models/reparacion/reparacion.model';
import { reparacionGateway } from '../../../domain/models/reparacion/gateway/reparacion-gateway';


@Injectable({
  providedIn: 'root'
})
export class ReparacionApiService extends reparacionGateway {

  // override getAll(): Observable<reparacionModel[]> {
  //   const { data }: any = (dataRaw as any).default;
  //   return of(data);
  // }

  private URL = environment.api;

  override getAll(): Observable<reparacionModel[]> {
    return this.httpClient.get<reparacionModel[]>(`${this.URL}/MostrarServicioRealizado`)
  }

  override newReparacion(reparacion: reparacionModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/MostrarDetalleSericio`, reparacion)
  }

  override getById(id: number): Observable<reparacionModel> {
    return this.httpClient.get<reparacionModel>(`${this.URL}/MostrarDetalleSericio/${id}`)
  }

  override updateReparacion(id_Reparacion: number, reparacion: reparacionModel): Observable<Object> {
    return this.httpClient.put(`${this.URL}/MostrarDetalleSericio/${id_Reparacion}`, reparacion)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
