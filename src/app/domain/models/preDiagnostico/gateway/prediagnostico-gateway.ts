import { Observable } from "rxjs";
import { preDiagnosticoModel } from "../preDiagnostico.model";

export abstract class prediagnosticoGateway {
  abstract getPrediagnostico(): Observable<Array<preDiagnosticoModel>>;
  abstract newPreDiagnostico(recepcion: preDiagnosticoModel): Observable<Object>;
  abstract getByIdUnique(id: number): Observable<preDiagnosticoModel>;
}
