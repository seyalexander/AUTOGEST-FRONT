import { Routes } from "@angular/router";
import { ListaChoferesPageComponent } from "./components/page/lista-choferes-page/lista-choferes-page.component";

export const choferesRoutes: Routes = [
  {
    path: '',
    component: ListaChoferesPageComponent,
    outlet: 'configuracion'
  }
];
