
import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';
import { MensajeDatosIncorrectosComponent } from '../../../../../../../shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { marcaAutosModel } from '../../../../../../../../domain/models/marcas-autos/marca-autos.model';
import { modeloAutosModel } from '../../../../../../../../domain/models/modelo-autos/modelo-autos.model';
import { GetModeloAutosUseCases } from '../../../../../../../../domain/useCase/get-modelo-autos-use-case';
import { GetMarcaAutosUseCases } from '../../../../../../../../domain/useCase/get-marca-autos-use-case';

@Component({
    selector: 'app-registro-datos-modelo-autos-page',
    templateUrl: './registro-datos-modelo-autos-page.component.html',
    styleUrls: ['./registro-datos-modelo-autos-page.component.css'],
    standalone: true,
    imports:[FormsModule, ReactiveFormsModule, NgIf, MensajeDatosIncorrectosComponent, CommonModule]
})
export class RegistroDatosModeloAutosPageComponent {
  tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  datosMarcaAutoslista: Array <marcaAutosModel> = [];
  listObservers$: Array<Subscription> = [];

  @Output() cerrarComponenteEvent = new EventEmitter<void>();

  cerrarComponente(): void {
    this.showRegistro = false;
    this.cerrarComponenteEvent.emit();
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  modeloAuto: modeloAutosModel = new modeloAutosModel();
  formularioRegistro: FormGroup = new FormGroup({});
  private marcaAutoSubscription: Subscription | undefined;

  private _route = inject(Router)

  constructor(
    private _postmodeloAutoUseCase: GetModeloAutosUseCases,
    private _getMarcaAutoUseCase: GetMarcaAutosUseCases
  ) {}

  ngOnInit(): void {
    this.obtenerMarcaAutosExito()
    this.formularioRegistro = new FormGroup({
      modeloAuto: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      modeloAutoDb: new FormControl('', [

      ])
    });
  }

  obtenerMarcaAutosExito(): void {
    this.marcaAutoSubscription = this._getMarcaAutoUseCase.getAllMarcaAutos().
      subscribe((Response: marcaAutosModel[]) => {
        this.datosMarcaAutoslista = Response;
      })
  }

  public sendModeloAuto(): void {
      this._postmodeloAutoUseCase
      .newModeloAuto(this.modeloAuto)
      .subscribe((response: any) => {
        this.cerrarComponente()
        this.mensajeValidacionRegistroCorrecto(response)
      });
  }

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Modelo auto creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaTipoDocumento();
    });
  }

  regresarListaTipoDocumento() {
    window.location.reload();
  }



  ngOnDestroy(): void {
    if (this.marcaAutoSubscription) {
      this.marcaAutoSubscription.unsubscribe();
    }
  }
}
