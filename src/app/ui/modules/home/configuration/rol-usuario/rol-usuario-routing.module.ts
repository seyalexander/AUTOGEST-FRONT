import { Routes } from '@angular/router';
import { ListaRolUsuariosPageComponent } from './components/pages/lista-rol-usuarios-page/lista-rol-usuarios-page.component';

export const rolUsuariosRoutes: Routes = [
  {
    path: '',
    component: ListaRolUsuariosPageComponent,
    outlet: 'configuracion'
  }
];
