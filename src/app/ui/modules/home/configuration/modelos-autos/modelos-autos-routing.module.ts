import { Routes } from '@angular/router';
import { ListaModeloAutosPageComponent } from './components/page/lista-modelo-autos-page/lista-modelo-autos-page.component';

export const modeloAutosRoutes: Routes = [
  {
    path: '',
    component: ListaModeloAutosPageComponent,
    outlet: 'configuracion'
  }
];
