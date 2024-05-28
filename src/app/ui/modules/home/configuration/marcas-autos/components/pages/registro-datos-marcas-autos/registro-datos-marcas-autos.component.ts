import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

import Swal from 'sweetalert2';
import { MensajeDatosIncorrectosComponent } from '../../../../../../../shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { marcaAutosModel } from '../../../../../../../../domain/models/marcas-autos/marca-autos.model';
import { GetMarcaAutosUseCases } from '../../../../../../../../domain/useCase/get-marca-autos-use-case';

@Component({
    selector: 'app-registro-datos-marcas-autos',
    templateUrl: './registro-datos-marcas-autos.component.html',
    styleUrls: ['./registro-datos-marcas-autos.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, MensajeDatosIncorrectosComponent,CommonModule]
})
export class RegistroDatosMarcasAutosComponent {
  tituloSwalCorrecto: String = 'CONFIRMACIÓN';

  @Output() cerrarComponenteEvent = new EventEmitter<void>();

  cerrarComponente(): void {
    this.showRegistro = false;
    this.cerrarComponenteEvent.emit();
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  marcaAuto: marcaAutosModel = new marcaAutosModel();
  formularioRegistro: FormGroup = new FormGroup({});

  private _postMarcaAutoUseCase = inject(GetMarcaAutosUseCases);

  ngOnInit(): void {
    this.formularioRegistro = new FormGroup({
      marcaAuto: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  public sendMarcaAuto(): void {
      this._postMarcaAutoUseCase
      .newMarcaAuto(this.marcaAuto)
      .subscribe((response: any) => {
        this.cerrarComponente()
        this.mensajeValidacionRegistroCorrecto(response)
      });
  }

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Marca Auto creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaTipoDocumento();
    });
  }

  regresarListaTipoDocumento() {
    window.location.reload();
  }
}
