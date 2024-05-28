import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { Subscription } from 'rxjs';
import { MensajeDatosIncorrectosComponent } from '../../../../../../../shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { marcaAutosModel } from '../../../../../../../../domain/models/marcas-autos/marca-autos.model';
import { modeloAutosModel } from '../../../../../../../../domain/models/modelo-autos/modelo-autos.model';
import { GetModeloAutosUseCases } from '../../../../../../../../domain/useCase/get-modelo-autos-use-case';
import { GetMarcaAutosUseCases } from '../../../../../../../../domain/useCase/get-marca-autos-use-case';


@Component({
  selector: 'app-actualizar-modelo-autos',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, MensajeDatosIncorrectosComponent, CommonModule],
  templateUrl: './actualizar-modelo-autos.component.html',
  styleUrls: ['./actualizar-modelo-autos.component.css']
})
export class ActualizarModeloAutosComponent {

  tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  datosMarcaAutoslista: Array <marcaAutosModel> = [];

  //================================================================
  // VARIABLE DONDE SE GUARDA EL ITEM SELECIONADO
  //================================================================

  @Input() modeloAutos: modeloAutosModel = {} as modeloAutosModel;

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

  modeloAuto: modeloAutosModel = new modeloAutosModel();
  formularioRegistro: FormGroup = new FormGroup({});

  private _postModeloAutoUseCase = inject(GetModeloAutosUseCases);
  private _getMarcaAutoUseCase = inject(GetMarcaAutosUseCases);

  ngOnInit(): void {
    this.formularioRegistro = new FormGroup({
      modeloAutos: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      modeloAutoDb: new FormControl('', [
      ]),
      idMarcaAutos: new FormControl('', [
      ]),
      marcaActual: new FormControl('', [
      ]),
    });

    this.obtenerMarcaAutosExito()
  }

  //================================================================
  // ACTUALIZAR INFORMACIÓN
  //================================================================

  public updateMarcaAuto(): void {
      this._postModeloAutoUseCase
      .updateFamiliaProductos(this.modeloAutos.id_Modelo, this.modeloAutos)
      .subscribe((response: any) => {
        this.cerrarComponente()
        this.mensajeValidacionRegistroCorrecto(response)
      });
  }

  //================================================================
  // OBTENER INFORMACIÓN DE LAS MARCAS
  //================================================================

  private marcaAutoSubscription: Subscription | undefined;

  obtenerMarcaAutosExito(): void {
    this.marcaAutoSubscription = this._getMarcaAutoUseCase.getAllMarcaAutos().
      subscribe((Response: marcaAutosModel[]) => {
        this.datosMarcaAutoslista = Response;
      })
  }

  //================================================================
  // SWIEET ALERT
  //================================================================

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Marca Edwin Auto creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      // this.regresarListaTipoDocumento();
    });
  }

  //================================================================
  // ACTIALIZAR PAGINA GENERAL
  //================================================================

  regresarListaTipoDocumento() {
    window.location.reload();
  }

  ngOnDestroy(): void {
    if (this.marcaAutoSubscription) {
      this.marcaAutoSubscription.unsubscribe();
    }
  }
}
