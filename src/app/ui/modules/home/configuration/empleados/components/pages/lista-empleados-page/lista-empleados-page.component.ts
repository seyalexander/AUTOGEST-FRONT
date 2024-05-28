import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { TableDatosEmpleadosComponent } from '../../organisms/table-datos-empleados/table-datos-empleados.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { CommonModule } from '@angular/common';
import { RegistroDatosEmpleadosPageComponent } from '../registro-datos-empleados-page/registro-datos-empleados-page.component';
import { ActualizarEmpleadosPageComponent } from '../actualizar-empleados-page/actualizar-empleados-page.component';
import { GetTipoEmpleadosUseCases } from '../../../../../../../../domain/useCase/get-empleado-use-case';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';

@Component({
  selector: 'app-lista-empleados-page',
  templateUrl: './lista-empleados-page.component.html',
  styleUrls: ['./lista-empleados-page.component.css'],
  standalone: true,
  imports: [ActualizarEmpleadosPageComponent, RegistroDatosEmpleadosPageComponent, HeaderPagesConfigurationComponent, TableDatosEmpleadosComponent, CommonModule]
})
export class ListaEmpleadosPageComponent {
  nombrePagina: String = 'EMPLEADOS';
  isLoading = false;
  //listObservers$: Array<Subscription> = [];

  //================================================================
  // Inyección de casos de uso
  //================================================================

  constructor(private _getEmpleadosUseCase: GetTipoEmpleadosUseCases) { }

  //================================================================
  // Función principal
  //================================================================

  ngOnInit(): void {
    this.obtenerEmpleadosExito()
  }

  //================================================================
  // Mostrar modal para registro
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

  empleadosSeleccionada: empleadoModel = {} as empleadoModel;

  editarMarca(idEmpleado: number) {
    this._getEmpleadosUseCase
      .getById(idEmpleado)
      .subscribe((Response: empleadoModel) => {
        this.empleadosSeleccionada = Response;
        this.showUpdate = true;
      });
  }

  //================================================================
  // Función para obtener los empleados
  //================================================================

  datosEmpleadoslista: Array<empleadoModel> = [];

  obtenerEmpleadosExito(): void {
    this.isLoading = true;
    this.empleadosSubscription = this._getEmpleadosUseCase
      .getAllEmpleados()
      .subscribe((Response: empleadoModel[]) => {
        this.datosEmpleadoslista = Response;
        this.isLoading = false;
      })
  }

  //================================================================
  // Destruir petición al cambiar de pantalla
  //================================================================

  private empleadosSubscription: Subscription | undefined;

  ngOnDestroy(): void {
    if (this.empleadosSubscription) {
      this.empleadosSubscription.unsubscribe();
    }
  }
}
