import { Injectable } from '@angular/core';
import { recepcionGateway } from '../../../domain/models/recepcion/gateway/recepcion-gateway';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { recepcionModel } from '../../../domain/models/recepcion/recepcion.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecepcionApiService extends recepcionGateway{

  private URL = environment.api;

  override getRecepcion(): Observable<recepcionModel[]> {
    return this.httpClient.get<recepcionModel[]>(`${this.URL}/buscarRecepcionPorEstado`)
  }

  override newRecepcion(recepcion: recepcionModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarRecepcion`, recepcion)
  }

  override getByIdUnique(id: number): Observable<recepcionModel> {
    return this.httpClient.get<recepcionModel>(`${this.URL}/buscarRecepcionPorId/${id}`)
  }

  constructor(private httpClient: HttpClient) { super();}
}
