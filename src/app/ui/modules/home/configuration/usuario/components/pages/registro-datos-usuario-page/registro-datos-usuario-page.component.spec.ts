import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosUsuarioPageComponent } from './registro-datos-usuario-page.component';

describe('RegistroDatosUsuarioPageComponent', () => {
  let component: RegistroDatosUsuarioPageComponent;
  let fixture: ComponentFixture<RegistroDatosUsuarioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RegistroDatosUsuarioPageComponent]
});
    fixture = TestBed.createComponent(RegistroDatosUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
