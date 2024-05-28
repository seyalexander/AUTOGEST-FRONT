import { Routes } from '@angular/router';
import { ListaTipoDocumentosPageComponent } from './components/page/lista-tipo-documentos-page/lista-tipo-documentos-page.component';

export const tipoDocumentosRoutes: Routes = [
  {
    path: '',
    component: ListaTipoDocumentosPageComponent,
    outlet: 'configuracion'
  }
];
