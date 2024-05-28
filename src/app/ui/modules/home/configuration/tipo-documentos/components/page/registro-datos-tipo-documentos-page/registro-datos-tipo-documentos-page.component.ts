import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, EventEmitter, inject, Output } from '@angular/core';

import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { MensajeDatosIncorrectosComponent } from '../../../../../../../shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { tipoDocumentosModel } from '../../../../../../../../domain/models/tipo-documentos/tipo-documentos.model';
import { GetTipoDocumentoUseCases } from '../../../../../../../../domain/useCase/get-tipo-documentos-use-case';

@Component({
  selector: 'app-registro-datos-tipo-documentos-page',
  templateUrl: './registro-datos-tipo-documentos-page.component.html',
  styleUrls: ['./registro-datos-tipo-documentos-page.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MensajeDatosIncorrectosComponent,
  ],
})
export class RegistroDatosTipoDocumentosPageComponent {

  //================================================================
  // FUNCIÓN MOSTRAR Y OCULTAR MODAL REGISTRO
  //================================================================

  @Output() cerrarComponenteEvent = new EventEmitter<void>();

  cerrarComponente(): void {
    this.showRegistro = false;
    this.cerrarComponenteEvent.emit();
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  //================================================================
  // FUNCIÓN PRINCIPAL
  //================================================================

  tipoDocumento: tipoDocumentosModel = new tipoDocumentosModel();
  formularioRegistro: FormGroup = new FormGroup({});
  private _postTipoDocumentoUseCase = inject(GetTipoDocumentoUseCases);

  ngOnInit(): void {
    this.formularioRegistro = new FormGroup({
      tipoDocumento: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }

  //================================================================
  // FUNCIÓN GUARDAR
  //================================================================

  public sendTipoDocumento(): void {
    this._postTipoDocumentoUseCase
      .newTipoDocumento(this.tipoDocumento)
      .subscribe((response: any) => {
        this.cerrarComponente();
        this.mensajeValidacionRegistroCorrecto(response);
      });
  }

  //================================================================
  // SWEETALERT
  //================================================================
  tituloSwalCorrecto: String = 'CONFIRMACIÓN';

  mensajeValidacionRegistroCorrecto(response: any) {
    const message =
      response && response.message
        ? response.message
        : 'Tipo Documento creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaTipoDocumento();
    });
  }

  //================================================================
  // REFRESH DE LA PÁGINA
  //================================================================

  regresarListaTipoDocumento() {
    window.location.reload();
  }
}
