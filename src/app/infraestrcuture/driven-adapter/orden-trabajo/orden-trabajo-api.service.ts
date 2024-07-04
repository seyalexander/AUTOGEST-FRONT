import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { ordenTrabajoGateway } from '../../../domain/models/orden-trabajo/gateway/tipo-documento-gateway';
import { ordenTrabajoModel } from '../../../domain/models/orden-trabajo/orden-trabajo.model';


@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoApiService extends ordenTrabajoGateway{

  // override getAll(): Observable<ordenTrabajoModel[]> {
  //   const { data }: any = (dataRaw as any).default;
  //   return of(data);
  // }

  private URL = environment.api;

  override getAll(): Observable<ordenTrabajoModel[]> {
    return this.httpClient.get<ordenTrabajoModel[]>(`${this.URL}/MostrarOrdenIngreso`)
  }

  override newOrdenProducto(ordenes: ordenTrabajoModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarOrdenIngreso`,ordenes)
  }

  override getByIdUnique(id: number): Observable<ordenTrabajoModel> {
    return this.httpClient.get<ordenTrabajoModel>(`${this.URL}/BusquedaIngresoId/${id}`)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }

}
