import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosModeloAutosPageComponent } from './registro-datos-modelo-autos-page.component';

describe('RegistroDatosModeloAutosPageComponent', () => {
  let component: RegistroDatosModeloAutosPageComponent;
  let fixture: ComponentFixture<RegistroDatosModeloAutosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RegistroDatosModeloAutosPageComponent]
});
    fixture = TestBed.createComponent(RegistroDatosModeloAutosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
