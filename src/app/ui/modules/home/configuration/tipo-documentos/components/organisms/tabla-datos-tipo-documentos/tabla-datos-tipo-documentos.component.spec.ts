import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDatosTipoDocumentosComponent } from './tabla-datos-tipo-documentos.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('TablaDatosTipoDocumentosComponent', () => {
  let component: TablaDatosTipoDocumentosComponent;
  let fixture: ComponentFixture<TablaDatosTipoDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SharedModule, TablaDatosTipoDocumentosComponent]
});
    fixture = TestBed.createComponent(TablaDatosTipoDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
