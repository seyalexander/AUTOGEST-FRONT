import { Component, EventEmitter, Input, Output } from '@angular/core';
import { recepcionModel } from '../../../../../../../../domain/models/recepcion/recepcion.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reparacionModel } from '../../../../../../../../domain/models/reparacion/reparacion.model';
import { ordenTrabajoModel } from '../../../../../../../../domain/models/orden-trabajo/orden-trabajo.model';

@Component({
  selector: 'app-cart-otros',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cart-otros.component.html',
  styleUrl: './cart-otros.component.css'
})
export class CartOtrosComponent {
  @Input() cartReparacion: ordenTrabajoModel[] = [];
  @Input() total1: number = 0;
  @Output() checkout = new EventEmitter<void>();
  total: number = 0;

  ngOnInit() {
    this.updateTotal();
  }

  updateTotal() {
    // this.total = this.cartItems.reduce((sum, item) => sum + (item.precio * (item.cantidad || 0)), 0);
  }

  onCheckout() {
    this.checkout.emit();
  }
}
