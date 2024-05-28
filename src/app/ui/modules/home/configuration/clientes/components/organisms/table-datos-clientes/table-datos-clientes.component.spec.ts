import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosClientesComponent } from './table-datos-clientes.component';

describe('TableDatosClientesComponent', () => {
  let component: TableDatosClientesComponent;
  let fixture: ComponentFixture<TableDatosClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TableDatosClientesComponent]
});
    fixture = TestBed.createComponent(TableDatosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
