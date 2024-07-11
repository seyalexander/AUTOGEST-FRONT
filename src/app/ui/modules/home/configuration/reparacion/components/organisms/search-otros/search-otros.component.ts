import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reparacionModel } from '../../../../../../../../domain/models/reparacion/reparacion.model';
import { Subscription } from 'rxjs';
import { GetOrdenTrabajoUseCases } from '../../../../../../../../domain/useCase/get-orden-trabajo-use-case';
import { ordenTrabajoModel } from '../../../../../../../../domain/models/orden-trabajo/orden-trabajo.model';

@Component({
  selector: 'app-search-otros',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './search-otros.component.html',
  styleUrl: './search-otros.component.css'
})
export class SearchOtrosComponent {
  @Output() ingresoAdded = new EventEmitter<ordenTrabajoModel>();

  reparacion: reparacionModel = {} as reparacionModel;
  ordenIngreso: Array<ordenTrabajoModel> = []
  filteredIngreso: ordenTrabajoModel[] = [];
  datosReparacionlista: Array<reparacionModel> = [];
  private servicioSubscription: Subscription | undefined;
  showRegistro: boolean = false;
  private ordenIngresoSubscription: Subscription | undefined;

  constructor(private _getOrdenIngresoUseCase: GetOrdenTrabajoUseCases) {}


  ngOnInit(): void {
    this.obtenerEmpleadosExito()
  }

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    // Aquí puedes agregar lógica para filtrar los servicios en base a searchTerm
  }

  addToCart(ingreso: ordenTrabajoModel): void {
    this.ingresoAdded.emit(ingreso);
  }

  obtenerEmpleadosExito(): void {
    this.ordenIngresoSubscription = this._getOrdenIngresoUseCase
      .getAllOrdenTrabajo()
      .subscribe((response: ordenTrabajoModel[]) => {
        this.ordenIngreso = response;
        this.filteredIngreso = this.ordenIngreso;
      });
  }

  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  ngOnDestroy(): void {
    if (this.servicioSubscription) {
      this.servicioSubscription.unsubscribe();
    }
  }
}
