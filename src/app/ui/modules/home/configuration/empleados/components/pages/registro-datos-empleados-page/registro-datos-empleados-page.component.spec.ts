import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosEmpleadosPageComponent } from './registro-datos-empleados-page.component';

describe('RegistroDatosEmpleadosPageComponent', () => {
  let component: RegistroDatosEmpleadosPageComponent;
  let fixture: ComponentFixture<RegistroDatosEmpleadosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RegistroDatosEmpleadosPageComponent]
});
    fixture = TestBed.createComponent(RegistroDatosEmpleadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
