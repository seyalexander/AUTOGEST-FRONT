import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteReparacionComponent } from './reporte-reparacion.component';

describe('ReporteReparacionComponent', () => {
  let component: ReporteReparacionComponent;
  let fixture: ComponentFixture<ReporteReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteReparacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
