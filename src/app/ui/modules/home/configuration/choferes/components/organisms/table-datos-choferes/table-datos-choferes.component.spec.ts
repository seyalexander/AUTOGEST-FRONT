import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosChoferesComponent } from './table-datos-choferes.component';

describe('TableDatosChoferesComponent', () => {
  let component: TableDatosChoferesComponent;
  let fixture: ComponentFixture<TableDatosChoferesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableDatosChoferesComponent]
    });
    fixture = TestBed.createComponent(TableDatosChoferesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
