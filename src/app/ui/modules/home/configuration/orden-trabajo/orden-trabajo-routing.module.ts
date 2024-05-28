import { Routes } from '@angular/router';
import { ListaOrdenTrabajoPageComponent } from './components/pages/lista-orden-trabajo-page/lista-orden-trabajo-page.component';

export const ordenTrabajoRoutes: Routes = [
  {
    path: '',
    component: ListaOrdenTrabajoPageComponent,
    outlet: 'configuracion'
  }
];
