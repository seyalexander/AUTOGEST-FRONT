import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarModeloAutosComponent } from './actualizar-modelo-autos.component';

describe('ActualizarModeloAutosComponent', () => {
  let component: ActualizarModeloAutosComponent;
  let fixture: ComponentFixture<ActualizarModeloAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActualizarModeloAutosComponent]
    });
    fixture = TestBed.createComponent(ActualizarModeloAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
