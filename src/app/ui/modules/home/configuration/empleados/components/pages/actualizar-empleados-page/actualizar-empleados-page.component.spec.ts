import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEmpleadosPageComponent } from './actualizar-empleados-page.component';

describe('ActualizarEmpleadosPageComponent', () => {
  let component: ActualizarEmpleadosPageComponent;
  let fixture: ComponentFixture<ActualizarEmpleadosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActualizarEmpleadosPageComponent]
    });
    fixture = TestBed.createComponent(ActualizarEmpleadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
