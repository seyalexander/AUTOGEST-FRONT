import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosMarcasAutosComponent } from './registro-datos-marcas-autos.component';

describe('RegistroDatosMarcasAutosComponent', () => {
  let component: RegistroDatosMarcasAutosComponent;
  let fixture: ComponentFixture<RegistroDatosMarcasAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RegistroDatosMarcasAutosComponent]
});
    fixture = TestBed.createComponent(RegistroDatosMarcasAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
