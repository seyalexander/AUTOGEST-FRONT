import Swal from 'sweetalert2';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';


import { MensajeDatosIncorrectosComponent } from '../../../../../../../shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { NgIf } from '@angular/common';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';
import { GetClientesUseCases } from '../../../../../../../../domain/useCase/get-clientes-use-case';



@Component({
    selector: 'app-registro-datos-clientes-page',
    templateUrl: './registro-datos-clientes-page.component.html',
    styleUrls: ['./registro-datos-clientes-page.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, MensajeDatosIncorrectosComponent]
})
export class RegistroDatosClientesPageComponent {


  respuestaApi: string = '';
  mensajeTipoDeCaracteres: String = 'Ingresar solo valores numéricos';
  mensajeCantidadCaracteresRuc: String = 'Ruc debe tener 11 caracteres';
  mensajeCantidadCaracteresRazonSocial: String = 'Razon social debe tener mínimo 6 caracteres';
  mensajeCantidadCaracteresTelefono: String = 'Teléfono debe tener 9 caracteres';
  mensajeCantidadCaracteresRepresetnmanteLegal: String = 'Representante Legal debe tener mínimo 3 caracteres';
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

  Clientes: clienteModel = new clienteModel();
  formularioRegistro: FormGroup = new FormGroup({});

  constructor(
    private _getClientesUseCase: GetClientesUseCases,
    private router: Router,
  ) { }
  //================================================================
  // FUNCIÓN PRICIPAL Y VALIDACIONES DE CAMPOS
  //================================================================
  ngOnInit(): void {
    this.formularioRegistro = new FormGroup({
      ruc: new FormControl('', [
        Validators.pattern(/^\d{11}$/),
        Validators.required,
        this.onlyLetrasValidator,
        this.cantidadCaracteresRuc
      ]),
      razonSocial: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(100),
        Validators.required,
        this.cantidadCaracteresRazonSocial
      ]),
      representante_Legal: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required,
        this.cantidadCaracteresRepresetnanteLegal
      ]),
      telefono: new FormControl('', [
        Validators.pattern(/^\d{9}$/),
        Validators.required,
        this.cantidadCaracteresTelefono,
        this.onlyLetrasValidator
      ]),
      estado: new FormControl('', [
        Validators.pattern(/^\d{1}$/),
        Validators.required,
      ]),
    });
  }

  //================================================================
  // VALIDACIÓN DE CADA CAMPO
  //================================================================

  onlyLetrasValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && isNaN(Number(value))) { return { onlyNumbers: true }; }
    return null;
  }

  cantidadCaracteresRuc(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value.length < 11 && value.length > 11) {
      return { maxLengthExceeded: true };
    }
    return null;
  }

  cantidadCaracteresRazonSocial(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value.length > 0 && value.length < 6) {
      return { maxLengthExceeded: true };
    }
    return null;
  }

  cantidadCaracteresRepresetnanteLegal(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value.length < 3 && value.length > 0) {
      return { maxLengthExceeded: true };
    }
    return null;
  }

  cantidadCaracteresTelefono(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value.length !== 9 && value.length > 0) {
      return { maxLengthExceeded: true };
    }
    return null;
  }

  //================================================================
  // FUNCIÓN PARA GUARDAR
  //================================================================

  public sendClientes(): void {
    this._getClientesUseCase
      .newCliente(this.Clientes)
      .subscribe((response: any) => {
        this.cerrarComponente();
        this.mensajeValidacionRegistroCorrecto(response);
      });
  }

  //================================================================
  // SWEETALERT
  //================================================================
  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Cliente creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaClientes();
    });
  }


  regresarListaClientes() {
    window.location.reload();
  }
}
