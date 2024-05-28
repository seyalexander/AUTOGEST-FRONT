import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosProductosComponent } from './table-datos-productos.component';

describe('TableDatosProductosComponent', () => {
  let component: TableDatosProductosComponent;
  let fixture: ComponentFixture<TableDatosProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableDatosProductosComponent]
    });
    fixture = TestBed.createComponent(TableDatosProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
