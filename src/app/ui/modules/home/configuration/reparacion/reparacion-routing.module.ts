import { Routes } from '@angular/router';
import { ListaReparacionPageComponent } from './components/pages/lista-reparacion-page/lista-reparacion-page.component';

export const reparacionRoutes: Routes = [
  {
    path: '',
    component: ListaReparacionPageComponent,
    outlet: 'configuracion'
  }
];
