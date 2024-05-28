import { Routes } from '@angular/router';
import { ListaFamiliaProductoPageComponent } from './components/pages/lista-familia-producto-page/lista-familia-producto-page.component';

export const familiaProductosRoutes: Routes = [
  {
    path: '',
    component: ListaFamiliaProductoPageComponent,
    outlet: 'configuracion'
  }
];
