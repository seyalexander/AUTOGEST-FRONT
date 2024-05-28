import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosAutosComponent } from './table-datos-autos.component';


describe('TableDatosAutosComponent', () => {
  let component: TableDatosAutosComponent;
  let fixture: ComponentFixture<TableDatosAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TableDatosAutosComponent]
});
    fixture = TestBed.createComponent(TableDatosAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
