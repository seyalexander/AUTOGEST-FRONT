import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosChoferes2Component } from './table-datos-choferes-2.component';

describe('TableDatosChoferes2Component', () => {
  let component: TableDatosChoferes2Component;
  let fixture: ComponentFixture<TableDatosChoferes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDatosChoferes2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDatosChoferes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
