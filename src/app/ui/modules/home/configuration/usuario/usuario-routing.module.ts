import { Routes } from '@angular/router';
import { ListaUsuariosPageComponent } from './components/pages/lista-usuarios-page/lista-usuarios-page.component';

export const usuarioRoutes: Routes = [
  {
    path: '',
    component: ListaUsuariosPageComponent,
    outlet: 'configuracion'
  }
];
