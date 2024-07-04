import { Routes } from "@angular/router";
import { ListaRecepcionPageComponent } from "./components/pages/lista-recepcion-page/lista-recepcion-page.component";

export const RECEPCION_ROUTES: Routes = [
  {
    path: '',
    component: ListaRecepcionPageComponent,
    outlet: 'configuracion'
  }
];
