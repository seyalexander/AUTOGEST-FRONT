import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosRecepcionComponent } from './table-datos-recepcion.component';

describe('TableDatosRecepcionComponent', () => {
  let component: TableDatosRecepcionComponent;
  let fixture: ComponentFixture<TableDatosRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDatosRecepcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDatosRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
