import { Routes } from '@angular/router';
import { ListaMarcaAutosPageComponent } from './components/pages/lista-marca-autos-page/lista-marca-autos-page.component';

export const marcaAutosRoutes: Routes = [
  {
    path: '',
    component: ListaMarcaAutosPageComponent,
    outlet: 'configuracion'
  }
];
