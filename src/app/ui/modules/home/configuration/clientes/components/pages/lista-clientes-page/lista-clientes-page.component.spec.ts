import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientesPageComponent } from './lista-clientes-page.component';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/UI/shared/shared.module';
import { TableDatosClientesComponent } from '../../organisms/table-datos-clientes/table-datos-clientes.component';
import { RegistroDatosClientesPageComponent } from '../registro-datos-clientes-page/RegistroDatosClientesPageComponent';
import { NgxPaginationModule } from 'ngx-pagination';
import { clientesGateway } from 'src/app/domain/models/clientes/gateway/clientes-gateway';
import { ClientesApiService } from 'src/app/infraestrcuture/driven-adapter/clientes/clientes-api.service';

describe('ListaClientesPageComponent', () => {
  let component: ListaClientesPageComponent;
  let fixture: ComponentFixture<ListaClientesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        AppModule,
        SharedModule,
        NgxPaginationModule,
        ListaClientesPageComponent,
        TableDatosClientesComponent,
        RegistroDatosClientesPageComponent
    ],
    providers: [
        { provide: clientesGateway, useClass: ClientesApiService },
    ]
});
    fixture = TestBed.createComponent(ListaClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
