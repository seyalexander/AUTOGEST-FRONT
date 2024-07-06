import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { productosModel } from '../../../../../../../../domain/models/productos/productos.model';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() cartItems: productosModel[] = [];
  @Input() total1: number = 0;
  @Output() checkout = new EventEmitter<void>();
  total: number = 0;

  ngOnInit() {
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + (item.precio * (item.cantidad || 0)), 0);
  }

  onCheckout() {
    this.checkout.emit();
  }
}
