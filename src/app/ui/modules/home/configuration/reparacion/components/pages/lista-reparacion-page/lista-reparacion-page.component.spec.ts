import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReparacionPageComponent } from './lista-reparacion-page.component';
import { TableDatosReparacionComponent } from '../../organisms/table-datos-reparacion/table-datos-reparacion.component';
import { RegistroDatosReparacionPageComponent } from '../registro-datos-reparacion-page/registro-datos-reparacion-page.component';
import { reparacionGateway } from 'src/app/domain/models/reparacion/gateway/reparacion-gateway';
import { ReparacionApiService } from 'src/app/infraestrcuture/driven-adapter/reparacion/reparacion-api.service';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('ListaReparacionPageComponent', () => {
  let component: ListaReparacionPageComponent;
  let fixture: ComponentFixture<ListaReparacionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        SharedModule,
        ListaReparacionPageComponent,
        TableDatosReparacionComponent,
        RegistroDatosReparacionPageComponent
    ],
    providers: [
        { provide: reparacionGateway, useClass: ReparacionApiService },
    ]
});
    fixture = TestBed.createComponent(ListaReparacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
