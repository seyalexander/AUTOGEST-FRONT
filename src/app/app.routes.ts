import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListaLoginPagesComponent } from './ui/modules/auth/components/pages/lista-login-pages/lista-login-pages.component';
import { HomePageComponent } from './ui/modules/home/home/components/home-page/home-page.component';
import { DashboardPageComponent } from './ui/modules/home/dashboard/components/page/dashboard-page/dashboard-page.component';
import { ListaDatosEmpresaComponent } from './ui/modules/home/configuration/empresa/components/pages/lista-datos-empresa/lista-datos-empresa.component';
import { ListaChoferesPageComponent } from './ui/modules/home/configuration/choferes/components/page/lista-choferes-page/lista-choferes-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ListaLoginPagesComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardPageComponent
      },
    //   {
    //     path: 'configuracion',
    //     pathMatch: 'full',
    //     component: ConfigurationPageComponent,
    //   },
      {
          path: 'empresa',
          component: ListaDatosEmpresaComponent,
      },
      {
          path: 'choferes',
          component: ListaChoferesPageComponent,
      },
    //   {
    //       path: 'MostrarCliente',
    //       component: ListaClientesPageComponent,
    //       loadChildren: () => import ('../app/UI/modules/home/configuration/clientes/clientes-routing.module').then(m=>m.clientesRoutes)
    //   },
    //   {
    //       path: 'marca-autos',
    //       component: ListaMarcaAutosPageComponent,
    //       loadChildren: () => import ('../app/UI/modules/home/configuration/marcas-autos/marcas-autos-routing.module').then(m=>m.marcaAutosRoutes)
    //   },
    //   {
    //     path: 'modelo-autos',
    //     component: ListaModeloAutosPageComponent,
    //     loadChildren: () => import ('../app/UI/modules/home/configuration/modelos-autos/modelos-autos-routing.module').then(m=>m.modeloAutosRoutes)
    //   },
    //   {
    //     path: 'autos',
    //     component: ListaAutosPageComponent,
    //     loadChildren: () => import ('../app/UI/modules/home/configuration/autos/autos-routing.module').then(m=>m.autosRoute),
    //   },
    //   {
    //     path: 'tipo-documentos',
    //     component: ListaTipoDocumentosPageComponent,
    //     loadChildren: () => import ('../app/UI/modules/home/configuration/tipo-documentos/tipo-documentos-routing.module').then(m=>m.tipoDocumentosRoutes)
    //   },
    //   {
    //     path: 'empleados',
    //     component: ListaEmpleadosPageComponent,
    //     loadChildren: () => import ('../app/UI/modules/home/configuration/empleados/empleados-routing.module').then(m=>m.empleadosRoutes)
    //   },
    //   {
    //     path: 'orden-trabajo',
    //     component: ListaOrdenTrabajoPageComponent,
    //     loadChildren: () => import ('../app/UI/modules/home/configuration/orden-trabajo/orden-trabajo-routing.module').then(m=>m.ordenTrabajoRoutes)
    //   },
    //   {
    //     path: 'reparacion',
    //     component: ListaReparacionPageComponent,
    //     loadChildren: () => import ('../app/UI/modules/home/configuration/reparacion/reparacion-routing.module').then(m=>m.reparacionRoutes)
    //   },
    //   {
    //     path: 'rol-usuarios',
    //     pathMatch: 'full',
    //     component: ListaRolUsuariosPageComponent,
    //     loadChildren: () => import ('../app/UI/modules/home/configuration/rol-usuario/rol-usuario-routing.module').then(m=>m.rolUsuariosRoutes)
    //   },
    //   {
    //     path: 'usuarios',
    //     component: ListaUsuariosPageComponent,
    //     loadChildren: () => import ('../app/UI/modules/home/configuration/usuario/usuario-routing.module').then(m=>m.usuarioRoutes)
    //   },
    //   {
    //     path: 'familia-productos',
    //     component: ListaFamiliaProductoPageComponent,
    //     loadChildren: () => import ('../app/UI/modules/home/configuration/familia-productos/familia-productos-routing.module').then(m=>m.familiaProductosRoutes)
    //   },
    //   {
    //     path: 'productos',
    //     component: ListaProductosPageComponent,
    //     loadChildren: () => import ('../app/UI/modules/home/configuration/productos/productos-routing.module').then(m=>m.productosRoutes)
    //   },
    //   {
    //     path: 'operacion',
    //     pathMatch: 'full',
    //     loadChildren: () => import ('./UI/modules/home/process/process-routing.module').then(m=>m.processRoutes),
    //   },
    ]
  },
];
