import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosMarcasAutosComponent } from './table-datos-marcas-autos.component';


describe('TableDatosMarcasAutosComponent', () => {
  let component: TableDatosMarcasAutosComponent;
  let fixture: ComponentFixture<TableDatosMarcasAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
});
    fixture = TestBed.createComponent(TableDatosMarcasAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
