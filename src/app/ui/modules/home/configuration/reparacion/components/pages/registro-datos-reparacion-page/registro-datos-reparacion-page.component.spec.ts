import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosReparacionPageComponent } from './registro-datos-reparacion-page.component';

describe('RegistroDatosReparacionPageComponent', () => {
  let component: RegistroDatosReparacionPageComponent;
  let fixture: ComponentFixture<RegistroDatosReparacionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RegistroDatosReparacionPageComponent]
});
    fixture = TestBed.createComponent(RegistroDatosReparacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
