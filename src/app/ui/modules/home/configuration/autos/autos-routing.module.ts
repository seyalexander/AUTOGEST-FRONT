import { Routes } from '@angular/router';
import { ListaAutosPageComponent } from './components/page/lista-autos-page/lista-autos-page.component';

export const autosRoute: Routes = [
  {
    path: '',
    component: ListaAutosPageComponent,
    outlet: 'configuracion'
  }
];
