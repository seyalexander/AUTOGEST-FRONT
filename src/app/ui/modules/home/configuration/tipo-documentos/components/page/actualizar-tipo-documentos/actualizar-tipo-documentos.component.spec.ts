import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTipoDocumentosComponent } from './actualizar-tipo-documentos.component';

describe('ActualizarTipoDocumentosComponent', () => {
  let component: ActualizarTipoDocumentosComponent;
  let fixture: ComponentFixture<ActualizarTipoDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActualizarTipoDocumentosComponent]
    });
    fixture = TestBed.createComponent(ActualizarTipoDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
