import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDiagnosticoComponent } from './tarjeta-diagnostico.component';

describe('TarjetaDiagnosticoComponent', () => {
  let component: TarjetaDiagnosticoComponent;
  let fixture: ComponentFixture<TarjetaDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaDiagnosticoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
