import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMarcaAutosPageComponent } from './actualizar-marca-autos-page.component';

describe('ActualizarMarcaAutosPageComponent', () => {
  let component: ActualizarMarcaAutosPageComponent;
  let fixture: ComponentFixture<ActualizarMarcaAutosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActualizarMarcaAutosPageComponent]
    });
    fixture = TestBed.createComponent(ActualizarMarcaAutosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
