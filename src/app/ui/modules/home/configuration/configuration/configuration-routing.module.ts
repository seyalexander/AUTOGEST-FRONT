import { AbstractControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationPageComponent } from './components/configuration-page/configuration-page.component';

export const configuracionRoutes: Routes = [
  // {
  //   path: '',
  //   component: ConfigurationPageComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'autos',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'empresa',
  //       loadChildren: () => import ('../empresa/empresa-routing.module').then(m=>m.empresaRoutes),
  //     },
  //     {
  //       path: 'MostrarCliente',
  //       loadChildren: () => import ('../clientes/clientes-routing.module').then(m=>m.clientesRoutes)
  //     },
  //     {
  //       path: 'marca-autos',
  //       loadChildren: () => import ('../marcas-autos/marcas-autos-routing.module').then(m=>m.marcaAutosRoutes)
  //     },
  //     {
  //       path: 'modelo-autos',
  //       loadChildren: () => import ('../modelos-autos/modelos-autos-routing.module').then(m=>m.modeloAutosRoutes)
  //     },
  //     {
  //       path: 'autos',
  //       loadChildren: () => import ('../autos/autos-routing.module').then(m=>m.autosRoute),
  //     },
  //     {
  //       path: 'tipo-documentos',
  //       loadChildren: () => import ('../tipo-documentos/tipo-documentos-routing.module').then(m=>m.tipoDocumentosRoutes)
  //     },
  //     {
  //       path: 'empleados',
  //       loadChildren: () => import ('../empleados/empleados-routing.module').then(m=>m.empleadosRoutes)
  //     },
  //     {
  //       path: 'orden-trabajo',
  //       loadChildren: () => import ('../orden-trabajo/orden-trabajo-routing.module').then(m=>m.ordenTrabajoRoutes)
  //     },
  //     {
  //       path: 'reparacion',
  //       loadChildren: () => import ('../reparacion/reparacion-routing.module').then(m=>m.reparacionRoutes)
  //     },
  //     {
  //       path: 'rol-usuarios',
  //       pathMatch: 'full',
  //       loadChildren: () => import ('../rol-usuario/rol-usuario-routing.module').then(m=>m.rolUsuariosRoutes)
  //     },
  //     {
  //       path: 'usuarios',
  //       loadChildren: () => import ('../usuario/usuario-routing.module').then(m=>m.usuarioRoutes)
  //     },
  //     {
  //       path: 'familia-productos',
  //       loadChildren: () => import ('../familia-productos/familia-productos-routing.module').then(m=>m.familiaProductosRoutes)
  //     },
  //     {
  //       path: 'productos',
  //       loadChildren: () => import ('../productos/productos-routing.module').then(m=>m.productosRoutes)
  //     },
  //     {
  //       path: 'choferes',
  //       loadChildren: () => import ('../choferes/choferes-routing.module').then(m=>m.choferesRoutes)
  //     }
  //   ]
  // }
];
