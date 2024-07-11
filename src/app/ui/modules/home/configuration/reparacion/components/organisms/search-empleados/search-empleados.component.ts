import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';
import { Subscription } from 'rxjs';
import { GetTipoEmpleadosUseCases } from '../../../../../../../../domain/useCase/get-empleado-use-case';

@Component({
  selector: 'app-search-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-empleados.component.html',
  styleUrl: './search-empleados.component.css'
})
export class SearchEmpleadosComponent {
  @Output() empleadoAdded = new EventEmitter<empleadoModel>();

  empleados: empleadoModel[] = [];
  filteredEmpleados: empleadoModel[] = [];
  datosProductoslista: Array<empleadoModel> = [];
  private productosSubscription: Subscription | undefined;
  showRegistro: boolean = false;

  constructor(private _getEmpleadoUseCase: GetTipoEmpleadosUseCases) {}

  ngOnInit(): void {
    this.obtenerEmpleadosExito();
  }

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredEmpleados = this.empleados.filter(empleado => empleado.nombres.toLowerCase().includes(searchTerm));
  }

  addToCart(empleado: empleadoModel) {
    this.empleadoAdded.emit(empleado);
  }

  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  obtenerEmpleadosExito(): void {
    this.productosSubscription = this._getEmpleadoUseCase
      .getAllEmpleados()
      .subscribe((response: empleadoModel[]) => {
        this.empleados = response;
        this.filteredEmpleados = this.empleados;
      });
  }

  ngOnDestroy(): void {
    if (this.productosSubscription) {
      this.productosSubscription.unsubscribe();
    }
  }
}
