import { Component } from '@angular/core';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { productosModel } from '../../../../../../../../domain/models/productos/productos.model';
import { DetalleServicioComponent } from '../detalle-servicio/detalle-servicio.component';
import { CartServicioComponent } from '../cart-servicio/cart-servicio.component';
import { ServicioSearchComponent } from '../servicio-search/servicio-search.component';
import { SearchEmpleadosComponent } from '../search-empleados/search-empleados.component';
import { empleadoModel } from '../../../../../../../../domain/models/empleado/empleado.model';
import { CartEmpleadoComponent } from '../cart-empleado/cart-empleado.component';
import { SearchOtrosComponent } from '../search-otros/search-otros.component';
import { reparacionModel } from '../../../../../../../../domain/models/reparacion/reparacion.model';
import { CartOtrosComponent } from '../cart-otros/cart-otros.component';
import { ordenTrabajoModel } from '../../../../../../../../domain/models/orden-trabajo/orden-trabajo.model';

interface servicioModel {
  idServicio?: number
  descripcionServicio: string
  precioServicio: number
}

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [
    ProductSearchComponent,
    CartComponent,
    CommonModule,
    ReactiveFormsModule,
    DetalleServicioComponent,
    CartServicioComponent,
    ServicioSearchComponent,
    SearchEmpleadosComponent,
    CartEmpleadoComponent,
    SearchOtrosComponent,
    CartOtrosComponent

  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  // =================================================================
  // PRODUCTOS
  // =================================================================
  cartItems: productosModel[] = [];
  total: number = 0;
  cantidad: number = 0

  onProductAdded(product: productosModel) {
    this.cartItems.push(product);
  }

  // =================================================================
  // SERVICIOS
  // =================================================================
  cartServicios: servicioModel[] = [];
  totalServicios: number = 0;
  cantidadServicios: number = 0

  onServicioAdded(servicio: servicioModel) {
    this.cartServicios.push(servicio);
    this.cantidad = servicio.precioServicio
    this.total += servicio.precioServicio;

  }

  // =================================================================
  // EMPLEADOS
  // =================================================================
  cartEmpleados: empleadoModel[] = [];

  onEmpleadosAdded(empleado: empleadoModel) {
    this.cartEmpleados.push(empleado);
  }

  // =================================================================
  // INGRESO
  // =================================================================
  cartIngreso: ordenTrabajoModel[] = [];
  onIngresoAdded(ingreso: ordenTrabajoModel) {
    this.cartIngreso.push(ingreso);
  }


  // =================================================================
  // Función enviar
  // =================================================================
  onCheckout() {
    console.log('Productos:', this.cartItems);
    console.log('Servicios:', this.cartServicios);
    console.log('Empleados:', this.cartEmpleados);
    // Aquí puedes añadir la lógica para procesar el pago y vaciar el carrito
    //this.cartItems = [];
    this.total = 0;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
