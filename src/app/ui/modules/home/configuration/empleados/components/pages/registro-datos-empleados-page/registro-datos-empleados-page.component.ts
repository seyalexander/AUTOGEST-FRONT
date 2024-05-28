
import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';
import { MensajeDatosIncorrectosComponent } from '../../../../../../../shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { tipoDocumentosModel } from '../../../../../../../../domain/models/tipo-documentos/tipo-documentos.model';
import { GetTipoEmpleadosUseCases } from '../../../../../../../../domain/useCase/get-empleado-use-case';
import { GetTipoDocumentoUseCases } from '../../../../../../../../domain/useCase/get-tipo-documentos-use-case';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';

@Component({
  selector: 'app-registro-datos-empleados-page',
  templateUrl: './registro-datos-empleados-page.component.html',
  styleUrls: ['./registro-datos-empleados-page.component.css'],
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, NgIf, MensajeDatosIncorrectosComponent, CommonModule]
})
export class RegistroDatosEmpleadosPageComponent {
  tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  datosTipoDocumentolista: Array<tipoDocumentosModel> = [];
  listObservers$: Array<Subscription> = [];

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

  constructor(
    private _postEmpleadoUseCase: GetTipoEmpleadosUseCases,
    private _getTipoDocumentoUseCase: GetTipoDocumentoUseCases
  ) {}

  //================================================================
  // FUNCIÓN PRINCIPAL
  //================================================================

  empleado: empleadoModel = new empleadoModel();
  formularioRegistro: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.obtenerTipoDocumentoExito();
    this.formularioRegistro = new FormGroup({
      nombreEmpleado: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      apellidosEmpleado: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      celularEmpleado: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      documentoEmpleado: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(11),
      ]),
      tipoDocumentoEmpleado: new FormControl('', [

      ]),
    });
  }

  //================================================================
  // FUNCIÓN OBETENR TIPOS DOCUMENTOS
  //================================================================

  obtenerTipoDocumentoExito(): void {
    this.marcaAutoSubscription = this._getTipoDocumentoUseCase
      .getAllTipoDocumento()
      .subscribe((Response: tipoDocumentosModel[]) => {
        this.datosTipoDocumentolista = Response;
      });
  }

  //================================================================
  // FUNCIÓN GUARDAR
  //================================================================

  public sendModeloAuto(): void {
    this._postEmpleadoUseCase
      .newEmpleado(this.empleado)
      .subscribe((response: any) => {
        this.cerrarComponente();
        this.mensajeValidacionRegistroCorrecto(response);
      });
  }

  //================================================================
  // SWEETALERT
  //================================================================

  mensajeValidacionRegistroCorrecto(response: any) {
    const message =
      response && response.message
        ? response.message
        : 'Empleado creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaEmpleado();
    });
  }

  //================================================================
  // REFRESH DE LA PÁGINA
  //================================================================

  regresarListaEmpleado() {
    window.location.reload();
  }

  //================================================================
  // DESTRUIR PETICIÓN AL IR A OTRA PÁGINA
  //================================================================

  private marcaAutoSubscription: Subscription | undefined;

  ngOnDestroy(): void {
    if (this.marcaAutoSubscription) {
      this.marcaAutoSubscription.unsubscribe();
    }
  }
}
