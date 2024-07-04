import { Injectable } from '@angular/core';
import { prediagnosticoGateway } from '../../../domain/models/preDiagnostico/gateway/prediagnostico-gateway';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { preDiagnosticoModel } from '../../../domain/models/preDiagnostico/preDiagnostico.model';

@Injectable({
  providedIn: 'root'
})
export class PrediagnosticoApiService extends prediagnosticoGateway{

  private URL = environment.api;

  override getPrediagnostico(): Observable<preDiagnosticoModel[]> {
    return this.httpClient.get<preDiagnosticoModel[]>(`${this.URL}/buscarprediagnosticoPorEstado`)
  }

  override newPreDiagnostico(recepcion: preDiagnosticoModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarPrediagnostico`,recepcion)
  }

  override getByIdUnique(id: number): Observable<preDiagnosticoModel> {
    return this.httpClient.get<preDiagnosticoModel>(`${this.URL}/buscarPrediagnosticoPorId/${id}`)
  }

  constructor(private httpClient: HttpClient) { super();}
}
