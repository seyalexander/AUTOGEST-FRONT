import { Routes } from '@angular/router';
import { ListaDatosEmpresaComponent } from './components/pages/lista-datos-empresa/lista-datos-empresa.component';

export const empresaRoutes: Routes = [
  {
    path: '',
    component: ListaDatosEmpresaComponent,
    outlet: 'configuracion'
  }
];
