import { Component, EventEmitter, Output } from '@angular/core';
import { productosModel } from '../../../../../../../../domain/models/productos/productos.model';
import { Subscription } from 'rxjs';
import { GetProductosUseCases } from '../../../../../../../../domain/useCase/get-productos-use-case';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})

export class ProductSearchComponent {
  @Output() productAdded = new EventEmitter<productosModel>();

  products: productosModel[] = [];
  filteredProducts: productosModel[] = [];
  datosProductoslista: Array<productosModel> = [];
  private productosSubscription: Subscription | undefined;
  showRegistro: boolean = false;

  constructor(private _getProductosUseCase: GetProductosUseCases) {}

  ngOnInit(): void {
    this.obtenerProductosExito();
  }

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProducts = this.products.filter(product => product.nombre.toLowerCase().includes(searchTerm));
  }

  addToCart(product: productosModel) {
    this.productAdded.emit(product);
  }

  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  obtenerProductosExito(): void {
    this.productosSubscription = this._getProductosUseCase
      .getAllProductos()
      .subscribe((response: productosModel[]) => {
        this.products = response;
        this.filteredProducts = this.products;
      });
  }

  ngOnDestroy(): void {
    if (this.productosSubscription) {
      this.productosSubscription.unsubscribe();
    }
  }
}
