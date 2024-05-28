import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { MensajeDatosIncorrectosComponent } from '../../../../../../../shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { tipoDocumentosModel } from '../../../../../../../../domain/models/tipo-documentos/tipo-documentos.model';
import { GetTipoDocumentoUseCases } from '../../../../../../../../domain/useCase/get-tipo-documentos-use-case';


@Component({
  selector: 'app-actualizar-tipo-documentos',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, MensajeDatosIncorrectosComponent, CommonModule],
  templateUrl: './actualizar-tipo-documentos.component.html',
  styleUrls: ['./actualizar-tipo-documentos.component.css']
})
export class ActualizarTipoDocumentosComponent {
  tituloSwalCorrecto: String = 'CONFIRMACIÓN';

  //================================================================
  // VARIABLE DONDE SE GUARDA EL ITEM SELECIONADO
  //================================================================

  @Input() tipoDocumentos: tipoDocumentosModel = {} as tipoDocumentosModel;

  //================================================================
  // FUNCIÓN PARA EJECUTAR UNA FUNCIÓN DESDE EL PADRE EN EL HIJO
  //================================================================

  @Output() cerrarComponenteUpdateEvent = new EventEmitter<void>();

  showUpdate: boolean = false;
  cerrarComponente(): void {
    this.showUpdate = false;
    this.cerrarComponenteUpdateEvent.emit();
  }


  //================================================================
  // FUNCIÓN PRINCIPAL Y DE VALIDACIONES
  //================================================================

  tipoDocumento: tipoDocumentosModel = new tipoDocumentosModel();
  formularioRegistro: FormGroup = new FormGroup({});

  private _postTipoDocumentoUseCase = inject(GetTipoDocumentoUseCases);

  ngOnInit(): void {
    this.formularioRegistro = new FormGroup({
      tipoDocumento: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      idTipoDocumento: new FormControl('', [
      ])
    });
  }

  //================================================================
  // ACTUALIZAR INFORMACIÓN
  //================================================================

  public updateTipoDocumento(): void {
      this._postTipoDocumentoUseCase
      .updateTipoDocumento(this.tipoDocumentos.id_Tipo_Documento, this.tipoDocumentos)
      .subscribe((response: any) => {
        this.cerrarComponente()
        this.mensajeValidacionRegistroCorrecto(response)
      });
  }

  //================================================================
  // SWIEET ALERT
  //================================================================

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Marca Edwin Auto creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaTipoDocumento();
    });
  }

  //================================================================
  // ACTIALIZAR PAGINA GENERAL
  //================================================================

  regresarListaTipoDocumento() {
    window.location.reload();
  }
}
