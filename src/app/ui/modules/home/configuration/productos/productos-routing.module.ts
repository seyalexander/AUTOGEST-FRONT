import { Routes } from "@angular/router";
import { ListaProductosPageComponent } from "./components/pages/lista-productos-page/lista-productos-page.component";

export const productosRoutes: Routes = [
  {
    path: '',
    component: ListaProductosPageComponent,
    outlet: 'configuracion'
  }
];
