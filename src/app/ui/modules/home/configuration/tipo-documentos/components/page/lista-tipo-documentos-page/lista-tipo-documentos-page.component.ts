import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { TablaDatosTipoDocumentosComponent } from '../../organisms/tabla-datos-tipo-documentos/tabla-datos-tipo-documentos.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { RegistroDatosTipoDocumentosPageComponent } from '../registro-datos-tipo-documentos-page/registro-datos-tipo-documentos-page.component';
import { CommonModule } from '@angular/common';
import { ActualizarTipoDocumentosComponent } from '../actualizar-tipo-documentos/actualizar-tipo-documentos.component';
import { tipoDocumentosModel } from '../../../../../../../../domain/models/tipo-documentos/tipo-documentos.model';
import { GetTipoDocumentoUseCases } from '../../../../../../../../domain/useCase/get-tipo-documentos-use-case';

@Component({
  selector: 'app-lista-tipo-documentos-page',
  templateUrl: './lista-tipo-documentos-page.component.html',
  styleUrls: ['./lista-tipo-documentos-page.component.css'],
  standalone: true,
  imports: [ActualizarTipoDocumentosComponent,RegistroDatosTipoDocumentosPageComponent, HeaderPagesConfigurationComponent, TablaDatosTipoDocumentosComponent, CommonModule]
})
export class ListaTipoDocumentosPageComponent {
  nombrePagina: String = 'TIPO DOCUMENTO'
  isLoading = false;
  datosTipoDocumentolista: Array<tipoDocumentosModel> = [];

  //================================================================
  // Inyección de casos de uso
  //================================================================

  constructor(private _getTipoDocumentoUseCase: GetTipoDocumentoUseCases) { }

  //================================================================
  // Función principal
  //================================================================

  ngOnInit(): void {
    this.obtenerTipoDocumentosExito()
  }

  //================================================================
  // Mostrar modal para registro
  //================================================================

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  //================================================================
  // Mostrar modal par actualizar
  //================================================================

  showUpdate: boolean = false;
  updateComponente(): void {
    this.showUpdate = !this.showUpdate;
  }

  //================================================================
  // Función para obtener los empleados
  //================================================================

  obtenerTipoDocumentosExito(): void {
    this.isLoading = true;
    this.tipoDocumentoSubscription = this._getTipoDocumentoUseCase.getAllTipoDocumento().
      subscribe((Response: tipoDocumentosModel[]) => {
        this.datosTipoDocumentolista = Response;
        this.isLoading = false;
      })
  }

  //================================================================
  // Obtener objeto seleccionado y asignarlo a una variable
  //================================================================

  tipoDocumentoSeleccionada: tipoDocumentosModel = {} as tipoDocumentosModel;

  editarTipoDocumento(idTipoDocumento: number) {
    this._getTipoDocumentoUseCase
      .getById(idTipoDocumento)
      .subscribe((Response: tipoDocumentosModel) => {
        this.tipoDocumentoSeleccionada = Response;
        this.showUpdate = true;
      });
  }

  //================================================================
  // Destruir petición al cambiar de pantalla
  //================================================================

  private tipoDocumentoSubscription: Subscription | undefined;

  ngOnDestroy(): void {
    if (this.tipoDocumentoSubscription) {
      this.tipoDocumentoSubscription.unsubscribe();
    }
  }
}
