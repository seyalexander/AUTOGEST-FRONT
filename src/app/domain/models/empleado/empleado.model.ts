import { tipoDocumentosModel } from "../tipo-documentos/tipo-documentos.model";

export class empleadoModel {
  id_Empleado: number = 0;
  nombres: String = '';
  apellidos: String = '';
  id_Tipo_Documento_Fk: tipoDocumentosModel = {} as tipoDocumentosModel
  Numero_Documento: String = '';
  telefono: String = '';
  numero_Documento: String = '';
}
