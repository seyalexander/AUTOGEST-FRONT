import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosAutosPageComponent } from './registro-datos-autos-page.component';

describe('RegistroDatosAutosPageComponent', () => {
  let component: RegistroDatosAutosPageComponent;
  let fixture: ComponentFixture<RegistroDatosAutosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RegistroDatosAutosPageComponent]
});
    fixture = TestBed.createComponent(RegistroDatosAutosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
