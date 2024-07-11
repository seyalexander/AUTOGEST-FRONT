import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

interface servicioModel {
  idServicio?: number
  descripcionServicio: string
  precioServicio: number
}

@Component({
  selector: 'app-servicio-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './servicio-search.component.html',
  styleUrl: './servicio-search.component.css'
})
export class ServicioSearchComponent {
  @Output() serviceAdded = new EventEmitter<servicioModel>();

  nuevoServicio: servicioModel = {idServicio: 0,  descripcionServicio: '', precioServicio: 0 };
  servicios: servicioModel[] = [];
  filteredServicios: servicioModel[] = [];
  datosServiciolista: Array<servicioModel> = [];
  private servicioSubscription: Subscription | undefined;
  showRegistro: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    // Aquí puedes agregar lógica para filtrar los servicios en base a searchTerm
  }

  addToCart() {
    // Añadir el servicio a la lista de servicios
    this.servicios.push({ ...this.nuevoServicio });
    console.log(this.nuevoServicio);

    // Emitir el evento con el servicio añadido
    this.serviceAdded.emit({ ...this.nuevoServicio });

    // Resetear los campos de entrada
    this.nuevoServicio = {idServicio: 0, descripcionServicio: '', precioServicio: 0 };
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
