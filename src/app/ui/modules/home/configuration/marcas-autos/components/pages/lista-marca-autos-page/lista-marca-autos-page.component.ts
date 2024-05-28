import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { TableDatosMarcasAutosComponent } from '../../organisms/table-datos-marcas-autos/table-datos-marcas-autos.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { RegistroDatosMarcasAutosComponent } from '../registro-datos-marcas-autos/registro-datos-marcas-autos.component';
import { CommonModule } from '@angular/common';
import { ActualizarMarcaAutosPageComponent } from '../actualizar-marca-autos-page/actualizar-marca-autos-page.component';
import { Router } from '@angular/router';
import { marcaAutosModel } from '../../../../../../../../domain/models/marcas-autos/marca-autos.model';
import { GetMarcaAutosUseCases } from '../../../../../../../../domain/useCase/get-marca-autos-use-case';

@Component({
  selector: 'app-lista-marca-autos-page',
  templateUrl: './lista-marca-autos-page.component.html',
  styleUrls: ['./lista-marca-autos-page.component.css'],
  standalone: true,
  imports: [
    ActualizarMarcaAutosPageComponent,
    HeaderPagesConfigurationComponent,
    TableDatosMarcasAutosComponent,
    RegistroDatosMarcasAutosComponent,
    CommonModule,
  ],
})
export class ListaMarcaAutosPageComponent {
  nombrePagina: String = 'MARCA AUTOS';
  isLoading = false;
  datosMarcaAutoslista: Array<marcaAutosModel> = [];
  listObservers$: Array<Subscription> = [];


  constructor(private _getMarcaAutosUseCase: GetMarcaAutosUseCases) {}

  private marcaAutoSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.obtenerMarcaAutosExito();
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

  marcaSeleccionada: marcaAutosModel = {} as marcaAutosModel;

  editarMarca(idMarca: number) {
    this._getMarcaAutosUseCase
      .getById(idMarca)
      .subscribe((Response: marcaAutosModel) => {
        this.marcaSeleccionada = Response;
        this.showUpdate = true;
      });
  }

  //================================================================
  // OBTENER DATA PARA LISTAR EN LA TABLA
  //================================================================

  obtenerMarcaAutosExito(): void {
    this.isLoading = true;
    this.marcaAutoSubscription = this._getMarcaAutosUseCase
      .getAllMarcaAutos()
      .subscribe((Response: marcaAutosModel[]) => {
        this.datosMarcaAutoslista = Response;
        this.isLoading = false;
      });
  }

  //================================================================
  // DESTRUIR PETICIÓN
  //================================================================

  ngOnDestroy(): void {
    if (this.marcaAutoSubscription) {
      this.marcaAutoSubscription.unsubscribe();
    }
  }
}
