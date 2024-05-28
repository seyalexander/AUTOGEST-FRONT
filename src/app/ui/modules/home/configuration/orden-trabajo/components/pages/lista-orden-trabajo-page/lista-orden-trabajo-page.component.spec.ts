import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenTrabajoPageComponent } from './lista-orden-trabajo-page.component';
import { ordenTrabajoGateway } from 'src/app/domain/models/orden-trabajo/gateway/tipo-documento-gateway';
import { OrdenTrabajoApiService } from 'src/app/infraestrcuture/driven-adapter/orden-trabajo/orden-trabajo-api.service';
import { TableDatosOrdenTrabajoComponent } from '../../organisms/table-datos-orden-trabajo/table-datos-orden-trabajo.component';
import { RegistroDatosOrdenTrabajoPageComponent } from '../registro-datos-orden-trabajo-page/registro-datos-orden-trabajo-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('ListaOrdenTrabajoPageComponent', () => {
  let component: ListaOrdenTrabajoPageComponent;
  let fixture: ComponentFixture<ListaOrdenTrabajoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        SharedModule,
        ListaOrdenTrabajoPageComponent,
        TableDatosOrdenTrabajoComponent,
        RegistroDatosOrdenTrabajoPageComponent
    ],
    providers: [
        { provide: ordenTrabajoGateway, useClass: OrdenTrabajoApiService },
    ]
});
    fixture = TestBed.createComponent(ListaOrdenTrabajoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
