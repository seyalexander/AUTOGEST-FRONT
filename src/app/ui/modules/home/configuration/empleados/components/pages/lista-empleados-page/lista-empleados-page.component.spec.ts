import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpleadosPageComponent } from './lista-empleados-page.component';
import { AppModule } from 'src/app/app.module';
import { empleadoGateway } from 'src/app/domain/models/empleado/gateway/empleado-gateway';
import { EmpleadosApiService } from 'src/app/infraestrcuture/driven-adapter/empleados/empleados-api.service';
import { TableDatosEmpleadosComponent } from '../../organisms/table-datos-empleados/table-datos-empleados.component';
import { RegistroDatosEmpleadosPageComponent } from '../registro-datos-empleados-page/registro-datos-empleados-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('ListaEmpleadosPageComponent', () => {
  let component: ListaEmpleadosPageComponent;
  let fixture: ComponentFixture<ListaEmpleadosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AppModule, SharedModule, ListaEmpleadosPageComponent,
        TableDatosEmpleadosComponent,
        RegistroDatosEmpleadosPageComponent],
    providers: [
        { provide: empleadoGateway, useClass: EmpleadosApiService },
    ]
});
    fixture = TestBed.createComponent(ListaEmpleadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
