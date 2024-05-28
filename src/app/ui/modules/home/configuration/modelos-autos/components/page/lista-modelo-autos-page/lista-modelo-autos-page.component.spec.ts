

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaModeloAutosPageComponent } from './lista-modelo-autos-page.component';
import { modeloAutosGateway } from 'src/app/domain/models/modelo-autos/gateway/modelo-autos-gateway';
import { ModeloAutosApiService } from 'src/app/infraestrcuture/driven-adapter/modelo-autos/modelo-autos-api.service';
import { TablaDatosModelosAutosComponent } from '../../organisms/tabla-datos-modelos-autos/tabla-datos-modelos-autos.component';
import { RegistroDatosModeloAutosPageComponent } from '../registro-datos-modelo-autos-page/registro-datos-modelo-autos-page.component';


describe('ListaModeloAutosPageComponent', () => {
  let component: ListaModeloAutosPageComponent;
  let fixture: ComponentFixture<ListaModeloAutosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        ListaModeloAutosPageComponent,
        TablaDatosModelosAutosComponent,
        RegistroDatosModeloAutosPageComponent
    ],
    providers: [
        { provide: modeloAutosGateway, useClass: ModeloAutosApiService },
    ]
});
    fixture = TestBed.createComponent(ListaModeloAutosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
