import { Routes } from '@angular/router';
import { ListaEmpleadosPageComponent } from './components/pages/lista-empleados-page/lista-empleados-page.component';

export const empleadosRoutes: Routes = [
  {
    path: '',
    component: ListaEmpleadosPageComponent,
    outlet: 'configuracion'
  }
];

