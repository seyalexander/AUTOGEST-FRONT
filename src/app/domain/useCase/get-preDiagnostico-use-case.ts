import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { prediagnosticoGateway } from "../models/preDiagnostico/gateway/prediagnostico-gateway";
import { preDiagnosticoModel } from "../models/preDiagnostico/preDiagnostico.model";

@Injectable({
  providedIn: 'root'
})

export class GetPreDiagnosticoUseCase {

  constructor( private _preDiagnosticoGateWay: prediagnosticoGateway) {}

  getDiagnostico (): Observable <Array<preDiagnosticoModel>> {
    return this._preDiagnosticoGateWay.getPrediagnostico();
  }

  newPreDiagnostico(diagnostico: preDiagnosticoModel): Observable<Object> {
    return this._preDiagnosticoGateWay.newPreDiagnostico(diagnostico)
  }

  getByIdUnique(id: number): Observable<preDiagnosticoModel> {
    return this._preDiagnosticoGateWay.getByIdUnique(id)
  }
}
