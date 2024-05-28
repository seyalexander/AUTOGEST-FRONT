import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosTipoDocumentosPageComponent } from './registro-datos-tipo-documentos-page.component';

describe('RegistroDatosTipoDocumentosPageComponent', () => {
  let component: RegistroDatosTipoDocumentosPageComponent;
  let fixture: ComponentFixture<RegistroDatosTipoDocumentosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RegistroDatosTipoDocumentosPageComponent]
});
    fixture = TestBed.createComponent(RegistroDatosTipoDocumentosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
