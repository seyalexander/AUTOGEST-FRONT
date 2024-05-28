import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosOrdenTrabajoComponent } from './table-datos-orden-trabajo.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';
import { ordenTrabajoGateway } from 'src/app/domain/models/orden-trabajo/gateway/tipo-documento-gateway';
import { OrdenTrabajoApiService } from 'src/app/infraestrcuture/driven-adapter/orden-trabajo/orden-trabajo-api.service';

describe('TableDatosOrdenTrabajoComponent', () => {
  let component: TableDatosOrdenTrabajoComponent;
  let fixture: ComponentFixture<TableDatosOrdenTrabajoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SharedModule, TableDatosOrdenTrabajoComponent],
});
    fixture = TestBed.createComponent(TableDatosOrdenTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
