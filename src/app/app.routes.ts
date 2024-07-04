import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListaLoginPagesComponent } from './ui/modules/auth/components/pages/lista-login-pages/lista-login-pages.component';
import { HomePageComponent } from './ui/modules/home/home/components/home-page/home-page.component';
import { DashboardPageComponent } from './ui/modules/home/dashboard/components/page/dashboard-page/dashboard-page.component';
import { ListaDatosEmpresaComponent } from './ui/modules/home/configuration/empresa/components/pages/lista-datos-empresa/lista-datos-empresa.component';
import { ListaChoferesPageComponent } from './ui/modules/home/configuration/choferes/components/page/lista-choferes-page/lista-choferes-page.component';
import { ListaClientesPageComponent } from './ui/modules/home/configuration/clientes/components/pages/lista-clientes-page/lista-clientes-page.component';
import { ListaMarcaAutosPageComponent } from './ui/modules/home/configuration/marcas-autos/components/pages/lista-marca-autos-page/lista-marca-autos-page.component';
import { ListaModeloAutosPageComponent } from './ui/modules/home/configuration/modelos-autos/components/page/lista-modelo-autos-page/lista-modelo-autos-page.component';
import { ListaAutosPageComponent } from './ui/modules/home/configuration/autos/components/page/lista-autos-page/lista-autos-page.component';
import { ListaTipoDocumentosPageComponent } from './ui/modules/home/configuration/tipo-documentos/components/page/lista-tipo-documentos-page/lista-tipo-documentos-page.component';
import { ListaEmpleadosPageComponent } from './ui/modules/home/configuration/empleados/components/pages/lista-empleados-page/lista-empleados-page.component';
import { ListaOrdenTrabajoPageComponent } from './ui/modules/home/configuration/orden-trabajo/components/pages/lista-orden-trabajo-page/lista-orden-trabajo-page.component';
import { ListaReparacionPageComponent } from './ui/modules/home/configuration/reparacion/components/pages/lista-reparacion-page/lista-reparacion-page.component';
import { ListaRolUsuariosPageComponent } from './ui/modules/home/configuration/rol-usuario/components/pages/lista-rol-usuarios-page/lista-rol-usuarios-page.component';
import { ListaUsuariosPageComponent } from './ui/modules/home/configuration/usuario/components/pages/lista-usuarios-page/lista-usuarios-page.component';
import { ListaFamiliaProductoPageComponent } from './ui/modules/home/configuration/familia-productos/components/pages/lista-familia-producto-page/lista-familia-producto-page.component';
import { ListaProductosPageComponent } from './ui/modules/home/configuration/productos/components/pages/lista-productos-page/lista-productos-page.component';
import { ConfigurationPageComponent } from './ui/modules/home/configuration/configuration/components/configuration-page/configuration-page.component';
import { ListaRecepcionPageComponent } from './ui/modules/home/configuration/recepcion/components/pages/lista-recepcion-page/lista-recepcion-page.component';

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
      {
        path: 'configuracion',
        pathMatch: 'full',
        component: ConfigurationPageComponent,
      },
      {
          path: 'empresa',
          component: ListaDatosEmpresaComponent,
      },
      {
          path: 'choferes',
          component: ListaChoferesPageComponent,
      },
      {
          path: 'MostrarCliente',
          component: ListaClientesPageComponent
      },
      {
          path: 'marca-autos',
          component: ListaMarcaAutosPageComponent,
      },
      {
        path: 'modelo-autos',
        component: ListaModeloAutosPageComponent,
      },
      {
        path: 'autos',
        component: ListaAutosPageComponent,
      },
      {
        path: 'tipo-documentos',
        component: ListaTipoDocumentosPageComponent,
      },
      {
        path: 'empleados',
        component: ListaEmpleadosPageComponent,
      },
      {
        path: 'orden-trabajo',
        component: ListaOrdenTrabajoPageComponent,
      },
      {
        path: 'reparacion',
        component: ListaReparacionPageComponent,
      },
      {
        path: 'rol-usuarios',
        pathMatch: 'full',
        component: ListaRolUsuariosPageComponent,
      },
      {
        path: 'usuarios',
        component: ListaUsuariosPageComponent,
      },
      {
        path: 'familia-productos',
        component: ListaFamiliaProductoPageComponent,
      },
      {
        path: 'productos',
        component: ListaProductosPageComponent,
      },
      {
        path: 'operacion',
        component: ListaOrdenTrabajoPageComponent
      },
      {
        path: 'recepcion',
        component: ListaRecepcionPageComponent
      },
    ]
  },
];
