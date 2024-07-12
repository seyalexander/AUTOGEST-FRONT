import { Component } from '@angular/core';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { GetReparacionUseCases } from '../../../../../../../../domain/useCase/get-reparacion-use-case';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../../../../../infraestrcuture/driven-adapter/login/auth.service';
import { Subscription } from 'rxjs';

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
  listObservers$: Array<Subscription> = [];
  refresh_token: string = '';
  userNombre: String = ''
  userLoginOn: boolean = false;
  userLoginId: number = 0;
  constructor(
    private _postReparacon: GetReparacionUseCases,
    private loginService: AuthService,
  ){}

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

   //============================================================================
  // FUNCIÓN PRINCIPAL
  //============================================================================
  formularioRegistro: FormGroup = new FormGroup({});
  ngOnInit(): void {


    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
        if (this.userLoginOn) {
          this.loginService.currentUserIdEmpleado.subscribe({
            next: (userLoginId) => {
              this.userLoginId = userLoginId
              console.log(this.userLoginId);

              if (this.userLoginId > 0 || this.userLoginId != null) {
                this.userLoginId
              }
            }
          })
          this.loginService.currentUserNombre.subscribe({
            next: (userNombre) => {
              this.userNombre = userNombre
            }
          })
        }
      }
    })

    this.onCheckout()

    this.formularioRegistro = new FormGroup({
      Auto: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      AutoDb: new FormControl('', []),
      AutoDbC: new FormControl('', [])
    });
  }



  // =================================================================
  // Función enviar
  // =================================================================
  reparacion: reparacionModel = new reparacionModel();
  onCheckout() {
    console.log('Productos:', this.cartItems);
    console.log('Servicios:', this.cartServicios);
    console.log('Empleados:', this.cartEmpleados);
    console.log('Ingreso:', this.cartIngreso);

    // Aquí puedes añadir la lógica para procesar el pago y vaciar el carrito
    //this.cartItems = [];
    this.total = 0;
    console.log(this.userLoginId);
    let totalCostProducto = this.cartItems.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0);
    let totalCostServicio = this.cartServicios.reduce((acc, curr) => acc + curr.precioServicio, 0);
    let costoTotal = totalCostProducto + totalCostServicio
    const currentDate = new Date();
    const fechaActual = currentDate.toISOString().split('T')[0];
    const currentTimeString = currentDate.toTimeString().split(' ')[0];
    const horaConSegundos = currentTimeString.length === 5 ? currentTimeString + ':00' : currentTimeString;
    let IdOrdenIngreso = this.cartIngreso[0].id_Orden_Ingreso;
    const formValue = this.reparacion
    formValue.id_empleado_fk.id_Empleado = this.userLoginId
    formValue.costo_Producto_Total = totalCostProducto
    formValue.costo_Servicio_Total = totalCostServicio
    formValue.costo_Total = costoTotal
    formValue.fecha_Entrega = fechaActual
    formValue.hora_Entrega = horaConSegundos
    formValue.id_Orden_Ingreso_Fk.id_Orden_Ingreso = IdOrdenIngreso

    console.log(formValue);
    this._postReparacon
    .newReparacion(formValue)
    .subscribe((response: any) => {

      this.mensajeValidacionRegistroCorrecto(response)
    })
  }

  //============================================================================
  // SWEETALERT
  //============================================================================

  tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Reparacion registrada correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaTipoDocumento();
    });
  }

  //============================================================================
  // RECARGAR PÁGINA
  //============================================================================

  regresarListaTipoDocumento() {
    window.location.reload();
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
