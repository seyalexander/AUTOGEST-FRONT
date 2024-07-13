import { GetFamiliaProductosUseCases } from './../../../../../../../../domain/useCase/get-familiaProductos.use-case';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { familiaProductoModel } from '../../../../../../../../domain/models/familia-productos/familiaProductos.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-familia-producto-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registro-familia-producto-page.component.html',
  styleUrls: ['./registro-familia-producto-page.component.css']
})
export class RegistroFamiliaProductoPageComponent {

  tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  datosMarcaAutoslista: Array <familiaProductoModel> = [];
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

  familia: familiaProductoModel = new familiaProductoModel();
  formularioRegistro: FormGroup = new FormGroup({});
  private marcaAutoSubscription: Subscription | undefined;


  constructor(
    private _postFamiliaUseCase: GetFamiliaProductosUseCases,
  ) {}

  ngOnInit(): void {


    this.formularioRegistro = new FormGroup({
      familiaControl: new FormControl('', [
        Validators.required,
      ]),
    });
  }



  public sendFamiliaProducto(): void {
    const formValue = this.familia;
    console.log(formValue);
      this._postFamiliaUseCase
      .newFamiliaProductos(formValue)
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
