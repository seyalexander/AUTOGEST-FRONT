import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosOrdenTrabajoPageComponent } from './registro-datos-orden-trabajo-page.component';

describe('RegistroDatosOrdenTrabajoPageComponent', () => {
  let component: RegistroDatosOrdenTrabajoPageComponent;
  let fixture: ComponentFixture<RegistroDatosOrdenTrabajoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RegistroDatosOrdenTrabajoPageComponent]
});
    fixture = TestBed.createComponent(RegistroDatosOrdenTrabajoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
