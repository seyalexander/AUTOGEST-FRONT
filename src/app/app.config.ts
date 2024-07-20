import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { clientesGateway } from './domain/models/clientes/gateway/clientes-gateway';
import { marcaAutosGateway } from './domain/models/marcas-autos/gateway/marca-autos-gateway';
import { modeloAutosGateway } from './domain/models/modelo-autos/gateway/modelo-autos-gateway';
import { autosGateway } from './domain/models/autos/gateway/autos-gateway';
import { tipoDocumentoGateway } from './domain/models/tipo-documentos/gateway/tipo-documentos-gateway';
import { empleadoGateway } from './domain/models/empleado/gateway/empleado-gateway';
import { ordenTrabajoGateway } from './domain/models/orden-trabajo/gateway/tipo-documento-gateway';
import { reparacionGateway } from './domain/models/reparacion/gateway/reparacion-gateway';
import { rolUsuarioGateway } from './domain/models/rol-usuario/gateway/rol-usuario-gateway';
import { usuariosGateway } from './domain/models/usuario/gateway/usuario-gateway';
import { familiaProductosGateway } from './domain/models/familia-productos/gateway/familiaProductos-gateway';
import { productosGateway } from './domain/models/productos/gateway/productos-gateway';
import { choferesGateway } from './domain/models/choferes/gateway/choferes-gateway';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ErrorInterceptorService } from './infraestrcuture/driven-adapter/login/error-interceptor.service';
import { ClienteInterceptorService } from './infraestrcuture/core/interceptores/cliente-interceptor.service';
import { ChoferesApiService } from './infraestrcuture/driven-adapter/choferes/choferes-api.service';
import { ProductosApiService } from './infraestrcuture/driven-adapter/productos/productos-api.service';
import { ClientesApiService } from './infraestrcuture/driven-adapter/clientes/clientes-api.service';
import { MarcaAutosApiService } from './infraestrcuture/driven-adapter/marca-autos/marca-autos-api.service';
import { AutosApiService } from './infraestrcuture/driven-adapter/autos/autos-api.service';
import { ModeloAutosApiService } from './infraestrcuture/driven-adapter/modelo-autos/modelo-autos-api.service';
import { TipoDocumentoApiService } from './infraestrcuture/driven-adapter/tipo-documento/tipo-documento-api.service';
import { EmpleadosApiService } from './infraestrcuture/driven-adapter/empleados/empleados-api.service';
import { OrdenTrabajoApiService } from './infraestrcuture/driven-adapter/orden-trabajo/orden-trabajo-api.service';
import { ReparacionApiService } from './infraestrcuture/driven-adapter/reparacion/reparacion-api.service';
import { RolUsuarioApiService } from './infraestrcuture/driven-adapter/rol-usuarios/rol-usuario-api.service';
import { UsuariosApiService } from './infraestrcuture/driven-adapter/usuarios/usuarios-api.service';
import { FamiliaProductosApiService } from './infraestrcuture/driven-adapter/familia-productos/familia-productos-api.service';
import { citasGateway } from './domain/models/citas/gateway/citas-gateway';
import { CitasApiService } from './infraestrcuture/driven-adapter/citas/citas-api.service';
import { recepcionGateway } from './domain/models/recepcion/gateway/recepcion-gateway';
import { RecepcionApiService } from './infraestrcuture/driven-adapter/recepcion/recepcion-api.service';
import { prediagnosticoGateway } from './domain/models/preDiagnostico/gateway/prediagnostico-gateway';
import { PrediagnosticoApiService } from './infraestrcuture/driven-adapter/prediagnostico/prediagnostico-api.service';
import { detalleEmpleadoGateway } from './domain/models/Detalle_Empleado_Servici/gateway/Detalle_Empleado_Servicio-gateway';
import { DetalleServicioService } from './infraestrcuture/driven-adapter/detalleEmpleado/detalle-servicio.service';
import { detalleProductosGateway } from './domain/models/Detalle_productos_servicio/gateway/Detalle_productos_servicio.model';
import { DetalleProductoService } from './infraestrcuture/driven-adapter/detalleProductos/detalle-producto.service';
import { detalleServiciosReparacionGateway } from './domain/models/Detalle_servicios_Servicio/gateway/Detalle_servicio_servicios_gateway';
import { DetalleServiciosService } from './infraestrcuture/driven-adapter/detalleServicios/detalle-servicios.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    { provide: clientesGateway, useClass: ClientesApiService },
    { provide: marcaAutosGateway, useClass: MarcaAutosApiService },
    { provide: modeloAutosGateway, useClass: ModeloAutosApiService },
    { provide: autosGateway, useClass: AutosApiService },
    { provide: tipoDocumentoGateway, useClass: TipoDocumentoApiService },
    { provide: empleadoGateway, useClass: EmpleadosApiService },
    { provide: ordenTrabajoGateway, useClass: OrdenTrabajoApiService },
    { provide: reparacionGateway, useClass: ReparacionApiService },
    { provide: rolUsuarioGateway, useClass: RolUsuarioApiService },
    { provide: usuariosGateway, useClass: UsuariosApiService },
    { provide: familiaProductosGateway, useClass: FamiliaProductosApiService },
    { provide: productosGateway, useClass: ProductosApiService },
    { provide: choferesGateway, useClass: ChoferesApiService },
    { provide: citasGateway, useClass: CitasApiService },
    { provide: recepcionGateway, useClass: RecepcionApiService },
    { provide: prediagnosticoGateway, useClass: PrediagnosticoApiService},
    { provide: detalleEmpleadoGateway, useClass: DetalleServicioService},
    { provide: detalleProductosGateway, useClass: DetalleProductoService},
    { provide: detalleServiciosReparacionGateway, useClass: DetalleServiciosService},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide:HTTP_INTERCEPTORS,useClass:ClienteInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true},
    provideHttpClient(withInterceptorsFromDi())
  ]
};
