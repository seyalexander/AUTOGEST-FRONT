import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoDocumentosPageComponent } from './lista-tipo-documentos-page.component';
import { tipoDocumentoGateway } from 'src/app/domain/models/tipo-documentos/gateway/tipo-documentos-gateway';
import { TipoDocumentoApiService } from 'src/app/infraestrcuture/driven-adapter/tipo-documento/tipo-documento-api.service';
import { TablaDatosTipoDocumentosComponent } from '../../organisms/tabla-datos-tipo-documentos/tabla-datos-tipo-documentos.component';
import { RegistroDatosTipoDocumentosPageComponent } from '../registro-datos-tipo-documentos-page/registro-datos-tipo-documentos-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('ListaTipoDocumentosPageComponent', () => {
  let component: ListaTipoDocumentosPageComponent;
  let fixture: ComponentFixture<ListaTipoDocumentosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        SharedModule,
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
