import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosReparacionComponent } from './table-datos-reparacion.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('TableDatosReparacionComponent', () => {
  let component: TableDatosReparacionComponent;
  let fixture: ComponentFixture<TableDatosReparacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SharedModule, TableDatosReparacionComponent]
});
    fixture = TestBed.createComponent(TableDatosReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
