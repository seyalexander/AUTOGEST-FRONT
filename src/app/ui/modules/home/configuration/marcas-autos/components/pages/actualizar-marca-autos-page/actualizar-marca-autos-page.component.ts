import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MensajeDatosIncorrectosComponent } from '../../../../../../../shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { marcaAutosModel } from '../../../../../../../../domain/models/marcas-autos/marca-autos.model';
import { GetMarcaAutosUseCases } from '../../../../../../../../domain/useCase/get-marca-autos-use-case';


@Component({
  selector: 'app-actualizar-marca-autos-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, MensajeDatosIncorrectosComponent, CommonModule],
  templateUrl: './actualizar-marca-autos-page.component.html',
  styleUrls: ['./actualizar-marca-autos-page.component.css']
})
export class ActualizarMarcaAutosPageComponent {
  tituloSwalCorrecto: String = 'CONFIRMACIÓN';

  //================================================================
  // VARIABLE DONDE SE GUARDA EL ITEM SELECIONADO
  //================================================================

  @Input() marcaAutos: marcaAutosModel = {} as marcaAutosModel;

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

  marcaAuto: marcaAutosModel = new marcaAutosModel();
  formularioRegistro: FormGroup = new FormGroup({});

  private _postMarcaAutoUseCase = inject(GetMarcaAutosUseCases);

  ngOnInit(): void {
    this.formularioRegistro = new FormGroup({
      marcaAutos: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      idMarcaAutos: new FormControl('', [
      ])
    });
  }

  //================================================================
  // ACTUALIZAR INFORMACIÓN
  //================================================================

  public updateMarcaAuto(): void {
      this._postMarcaAutoUseCase
      .updateMarcaAutos(this.marcaAutos.id_Marca, this.marcaAutos)
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
