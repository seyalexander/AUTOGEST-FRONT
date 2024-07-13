import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface servicioModel {
    idServicio?: number
    descripcionServicio: string
    precioServicio: number
}

@Component({
  selector: 'app-cart-servicio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cart-servicio.component.html',
  styleUrl: './cart-servicio.component.css'
})

export class CartServicioComponent {
  @Input() cartServicios: servicioModel[] = [];
  @Input() total1: number = 0;
  @Output() checkout = new EventEmitter<void>();
  total: number = 0;
  multiplicador: number = 1

  ngOnInit() {
    this.updateTotalServicio();
  }

  updateTotalServicio() {
    this.total = this.cartServicios.reduce((sum, item) => sum + (item.precioServicio * Number(this.multiplicador)), 0);
    console.log(this.total);

  }

  onCheckout() {
    this.checkout.emit();
  }
}
