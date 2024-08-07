import { Observable } from "rxjs";
import { choferesModel } from "../choferes.model";

export abstract class choferesGateway {
  abstract getAllChoferes(): Observable<Array<choferesModel>>;
  abstract newChoferes(chofer: choferesModel): Observable<Object>;
}
