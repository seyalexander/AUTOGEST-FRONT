import { GetModeloAutosUseCases } from './../../../../../../../../domain/useCase/get-modelo-autos-use-case';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { TablaDatosModelosAutosComponent } from '../../organisms/tabla-datos-modelos-autos/tabla-datos-modelos-autos.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { RegistroDatosModeloAutosPageComponent } from '../registro-datos-modelo-autos-page/registro-datos-modelo-autos-page.component';
import { CommonModule } from '@angular/common';
import { ActualizarModeloAutosComponent } from '../actualizar-modelo-autos/actualizar-modelo-autos.component';
import { modeloAutosModel } from '../../../../../../../../domain/models/modelo-autos/modelo-autos.model';

@Component({
    selector: 'app-lista-modelo-autos-page',
    templateUrl: './lista-modelo-autos-page.component.html',
    styleUrls: ['./lista-modelo-autos-page.component.css'],
    standalone: true,
    imports: [ActualizarModeloAutosComponent, RegistroDatosModeloAutosPageComponent, HeaderPagesConfigurationComponent, TablaDatosModelosAutosComponent, CommonModule]
})
export class ListaModeloAutosPageComponent {
  nombrePagina: String = 'MODELO AUTOS'
  isLoading = false;
  datosModeloAutoslista: Array <modeloAutosModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getModeloAutosUseCase: GetModeloAutosUseCases) {}
  private modeloAutoSubscription: Subscription | undefined;

  ngOnInit():  void {

   this.obtenerModeloExito()

  }

  //================================================================
  // ABRIR MODAL DE REGISTRAR
  //================================================================

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  //================================================================
  // ABRIR MODAL DE ACTUALIZAR
  //================================================================

  showUpdate: boolean = false;
  updateComponente(): void {
    this.showUpdate = !this.showUpdate;
  }

  //================================================================
  // OBTENER OBJETO DEL LO SELECCIONADO Y ASIGNARLO A UNA VARIABLE
  //================================================================

  modeloSeleccionada: modeloAutosModel = {} as modeloAutosModel;

  editarModelo(idModelo: number) {
    this._getModeloAutosUseCase
      .getById(idModelo)
      .subscribe((Response: modeloAutosModel) => {
        this.modeloSeleccionada = Response;
        this.showUpdate = true;
      });
  }

  //================================================================
  // OBTENER DATA PARA LISTAR EN LA TABLA
  //================================================================

  obtenerModeloExito(): void {
    this.isLoading = true;
    this.modeloAutoSubscription = this._getModeloAutosUseCase
    .getAllModeloAutos().
      subscribe((Response: modeloAutosModel[]) => {
        this.datosModeloAutoslista = Response;
        this.isLoading = false;
      })
  }

  //================================================================
  // DESTRUIR PETICIÓN
  //================================================================

  ngOnDestroy(): void {
    if (this.modeloAutoSubscription) {
      this.modeloAutoSubscription.unsubscribe();
    }
  }
}
