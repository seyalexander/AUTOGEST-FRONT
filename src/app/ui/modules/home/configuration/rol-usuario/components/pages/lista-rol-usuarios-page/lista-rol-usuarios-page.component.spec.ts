import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRolUsuariosPageComponent } from './lista-rol-usuarios-page.component';
import { rolUsuarioGateway } from 'src/app/domain/models/rol-usuario/gateway/rol-usuario-gateway';
import { RolUsuarioApiService } from 'src/app/infraestrcuture/driven-adapter/rol-usuarios/rol-usuario-api.service';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/UI/shared/shared.module';
import { TableDatosRolUsuariosComponent } from '../../organisms/table-datos-rol-usuarios/table-datos-rol-usuarios.component';
import { RegistroDatosRolUsuarioPageComponent } from '../registro-datos-rol-usuario-page/registro-datos-rol-usuario-page.component';

describe('ListaRolUsuariosPageComponent', () => {
  let component: ListaRolUsuariosPageComponent;
  let fixture: ComponentFixture<ListaRolUsuariosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AppModule, SharedModule, ListaRolUsuariosPageComponent,
        TableDatosRolUsuariosComponent,
        RegistroDatosRolUsuarioPageComponent],
    providers: [
        { provide: rolUsuarioGateway, useClass: RolUsuarioApiService }
    ]
});
    fixture = TestBed.createComponent(ListaRolUsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
