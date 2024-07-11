import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';

@Component({
  selector: 'app-cart-empleado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cart-empleado.component.html',
  styleUrl: './cart-empleado.component.css'
})
export class CartEmpleadoComponent {
  @Input() cartEmpleado: empleadoModel[] = [];
  @Input() total1: number = 0;
  @Output() checkout = new EventEmitter<void>();
  total: number = 0;

  ngOnInit() {}

  onCheckout() {
    this.checkout.emit();
  }
}
