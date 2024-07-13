import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { TableDatosUsuariosComponent } from '../../organisms/table-datos-usuarios/table-datos-usuarios.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { GetUsuariosUseCases } from '../../../../../../../../domain/useCase/get-usuarios-use-case';
import { usuarioModel } from '../../../../../../../../domain/models/usuario/usuario.model';
import { RegistroDatosUsuarioPageComponent } from '../registro-datos-usuario-page/registro-datos-usuario-page.component';

@Component({
    selector: 'app-lista-usuarios-page',
    templateUrl: './lista-usuarios-page.component.html',
    styleUrls: ['./lista-usuarios-page.component.css'],
    standalone: true,
    imports: [
      HeaderPagesConfigurationComponent,
      TableDatosUsuariosComponent,
      RegistroDatosUsuarioPageComponent
    ]
})
export class ListaUsuariosPageComponent {
  nombrePagina: String = 'USUARIOS';

  datosUsuarioslista: Array <usuarioModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getUsuariosUseCase: GetUsuariosUseCases) {}


  ngOnInit():  void {

    const ObservarDatosClientes$ = this._getUsuariosUseCase.getAllUsuarios().
    subscribe( Response => {
        this.datosUsuarioslista = Response;
        console.log(this.datosUsuarioslista);

      })

    this.listObservers$ = [ObservarDatosClientes$]

  }
}
