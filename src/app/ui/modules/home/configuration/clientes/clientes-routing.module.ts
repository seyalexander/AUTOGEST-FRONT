import { Routes } from '@angular/router';
import { ListaClientesPageComponent } from './components/pages/lista-clientes-page/lista-clientes-page.component';

export const clientesRoutes: Routes = [
  {
    path: '',
    component: ListaClientesPageComponent,
    outlet: 'configuracion'
  }
];
