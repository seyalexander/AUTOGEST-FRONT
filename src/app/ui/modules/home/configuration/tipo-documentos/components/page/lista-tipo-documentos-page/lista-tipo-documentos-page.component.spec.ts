
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoDocumentosPageComponent } from './lista-tipo-documentos-page.component';
import { TablaDatosTipoDocumentosComponent } from '../../organisms/tabla-datos-tipo-documentos/tabla-datos-tipo-documentos.component';
import { RegistroDatosTipoDocumentosPageComponent } from '../registro-datos-tipo-documentos-page/registro-datos-tipo-documentos-page.component';
import { tipoDocumentoGateway } from '../../../../../../../../domain/models/tipo-documentos/gateway/tipo-documentos-gateway';
import { TipoDocumentoApiService } from '../../../../../../../../infraestrcuture/driven-adapter/tipo-documento/tipo-documento-api.service';


describe('ListaTipoDocumentosPageComponent', () => {
  let component: ListaTipoDocumentosPageComponent;
  let fixture: ComponentFixture<ListaTipoDocumentosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [

        ListaTipoDocumentosPageComponent,
        TablaDatosTipoDocumentosComponent,
        RegistroDatosTipoDocumentosPageComponent
    ],
    providers: [
        { provide: tipoDocumentoGateway, useClass: TipoDocumentoApiService },
    ]
});
    fixture = TestBed.createComponent(ListaTipoDocumentosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
