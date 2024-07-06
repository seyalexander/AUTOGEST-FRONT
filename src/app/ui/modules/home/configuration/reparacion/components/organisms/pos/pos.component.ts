import { Component } from '@angular/core';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { productosModel } from '../../../../../../../../domain/models/productos/productos.model';
import { DetalleServicioComponent } from '../detalle-servicio/detalle-servicio.component';


@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [ProductSearchComponent, CartComponent, CommonModule, ReactiveFormsModule, DetalleServicioComponent],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  cartItems: productosModel[] = [];
  total: number = 0;
  cantidad: number = 0

  onProductAdded(product: productosModel) {
    this.cartItems.push(product);
    this.cantidad = product.cantidad

    this.total += product.precio * this.cantidad ;

  }

  onCheckout() {
    console.log('Checkout:', this.cartItems);
    // Aquí puedes añadir la lógica para procesar el pago y vaciar el carrito
    //this.cartItems = [];
    this.total = 0;

  }
}
