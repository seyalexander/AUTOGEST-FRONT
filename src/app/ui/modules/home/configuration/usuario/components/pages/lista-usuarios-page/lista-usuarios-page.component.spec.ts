import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuariosPageComponent } from './lista-usuarios-page.component';
import { usuariosGateway } from 'src/app/domain/models/usuario/gateway/usuario-gateway';
import { UsuariosApiService } from 'src/app/infraestrcuture/driven-adapter/usuarios/usuarios-api.service';
import { TableDatosUsuariosComponent } from '../../organisms/table-datos-usuarios/table-datos-usuarios.component';
import { RegistroDatosUsuarioPageComponent } from '../registro-datos-usuario-page/registro-datos-usuario-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('ListaUsuariosPageComponent', () => {
  let component: ListaUsuariosPageComponent;
  let fixture: ComponentFixture<ListaUsuariosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        SharedModule,
        ListaUsuariosPageComponent,
        TableDatosUsuariosComponent,
        RegistroDatosUsuarioPageComponent
    ],
    providers: [
        { provide: usuariosGateway, useClass: UsuariosApiService },
    ]
});
    fixture = TestBed.createComponent(ListaUsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
