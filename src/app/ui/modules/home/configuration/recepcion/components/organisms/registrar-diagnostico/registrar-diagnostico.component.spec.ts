import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDiagnosticoComponent } from './registrar-diagnostico.component';

describe('RegistrarDiagnosticoComponent', () => {
  let component: RegistrarDiagnosticoComponent;
  let fixture: ComponentFixture<RegistrarDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarDiagnosticoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
