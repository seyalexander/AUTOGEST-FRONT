import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMarcaAutosPageComponent } from './lista-marca-autos-page.component';
import { marcaAutosGateway } from 'src/app/domain/models/marcas-autos/gateway/marca-autos-gateway';
import { MarcaAutosApiService } from 'src/app/infraestrcuture/driven-adapter/marca-autos/marca-autos-api.service';
import { TableDatosMarcasAutosComponent } from '../../organisms/table-datos-marcas-autos/table-datos-marcas-autos.component';
import { RegistroDatosMarcasAutosComponent } from '../registro-datos-marcas-autos/registro-datos-marcas-autos.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';



describe('ListaMarcaAutosPageComponent', () => {
  let component: ListaMarcaAutosPageComponent;
  let fixture: ComponentFixture<ListaMarcaAutosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        SharedModule,
        ListaMarcaAutosPageComponent,
        TableDatosMarcasAutosComponent,
        RegistroDatosMarcasAutosComponent
    ],
    providers: [
        { provide: marcaAutosGateway, useClass: MarcaAutosApiService },
    ]
});
    fixture = TestBed.createComponent(ListaMarcaAutosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
