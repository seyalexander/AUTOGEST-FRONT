import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosRolUsuarioPageComponent } from './registro-datos-rol-usuario-page.component';

describe('RegistroDatosRolUsuarioPageComponent', () => {
  let component: RegistroDatosRolUsuarioPageComponent;
  let fixture: ComponentFixture<RegistroDatosRolUsuarioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RegistroDatosRolUsuarioPageComponent]
});
    fixture = TestBed.createComponent(RegistroDatosRolUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
