import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosFamiliaProductosComponent } from './table-datos-familia-productos.component';

describe('TableDatosFamiliaProductosComponent', () => {
  let component: TableDatosFamiliaProductosComponent;
  let fixture: ComponentFixture<TableDatosFamiliaProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableDatosFamiliaProductosComponent]
    });
    fixture = TestBed.createComponent(TableDatosFamiliaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
