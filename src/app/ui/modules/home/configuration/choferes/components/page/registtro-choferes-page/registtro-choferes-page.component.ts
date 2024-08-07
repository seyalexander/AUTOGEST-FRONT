import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { choferesModel } from '../../../../../../../../domain/models/choferes/choferes.model';
import { isEmpty, Subscription } from 'rxjs';
import { GetChoferesUseCases } from '../../../../../../../../domain/useCase/get-choferes-use-case';
import Swal from 'sweetalert2';
import { MensajeDatosIncorrectosComponent } from '../../../../../../../shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import { GetTipoDocumentoUseCases } from '../../../../../../../../domain/useCase/get-tipo-documentos-use-case';
import { tipoDocumentosModel } from '../../../../../../../../domain/models/tipo-documentos/tipo-documentos.model';
import { GetClientesUseCases } from '../../../../../../../../domain/useCase/get-clientes-use-case';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';

@Component({
  selector: 'app-registtro-choferes-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MensajeDatosIncorrectosComponent,
    CommonModule,

  ],
  templateUrl: './registtro-choferes-page.component.html',
  styleUrls: ['./registtro-choferes-page.component.css']
})
export class RegisttroChoferesPageComponent {
  tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  listObservers$: Array<Subscription> = [];

  Chofer: choferesModel = new choferesModel();
  formularioRegistro: FormGroup = new FormGroup({});
  private choferesSubscription: Subscription | undefined;
  private _getClientesUseCase = inject(GetClientesUseCases);


  constructor(
    private _postChoferesUseCase: GetChoferesUseCases,
    private _getTipoDocumentoUseCase: GetTipoDocumentoUseCases,
  ) { }

  ngOnInit(): void {
    this.obtenerClientesExito()
    this.obtenerTipoDocumentosExito()
    this.formularioRegistro = new FormGroup({
      nombreChofer: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
      ]),
      apellidosChofer: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80)
      ]),
      documentoChofer: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      telefonoChofer: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      tipoDocumentoChofer: new FormControl('', []),
      clienteChofer: new FormControl('', []),
    });
  }

  public sendChofer(): void {
    const formValue = this.Chofer;

    if (formValue.id_Tipo_Documento_Fk.id_Tipo_Documento == undefined) {
      this.mensajeValidacionTipoDocumentoWarning()
    }

    if (formValue.idClienteFk.idCliente == undefined) {
      this.mensajeValidacionClienteWarning()
    }

    console.log(formValue);
    this._postChoferesUseCase
      .newChoferes(formValue)
      .subscribe((response: any) => {
        this.mensajeValidacionRegistroCorrecto(response)
      });
  }

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Chofer creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaTipoDocumento();
    });
  }

  mensajeValidacionTipoDocumentoWarning() {
    const message = 'Falta seleccionar el tipo documento';
    Swal.fire(`Alerta`, message, 'warning').then(() => { });
  }

  mensajeValidacionClienteWarning() {
    const message = 'Falta seleccionar el cliente';
    Swal.fire(`Alerta`, message, 'warning').then(() => { });
  }

  regresarListaTipoDocumento() {
    window.location.reload();
  }

  datosClienteslista: Array<clienteModel> = [];
  obtenerClientesExito(): void {
    this.clientesSubscription = this._getClientesUseCase.getAllClientes().
      subscribe((Response: clienteModel[]) => {
        this.datosClienteslista = Response;
      })
  }

  datosTipoDocumentolista: Array<tipoDocumentosModel> = [];
  private clientesSubscription: Subscription | undefined;
  private tipoDocumentoSubscription: Subscription | undefined;
  obtenerTipoDocumentosExito(): void {
    this.tipoDocumentoSubscription = this._getTipoDocumentoUseCase.getAllTipoDocumento().
      subscribe((Response: tipoDocumentosModel[]) => {
        this.datosTipoDocumentolista = Response;
      })
  }

  ngOnDestroy(): void {
    if (this.choferesSubscription) {
      this.choferesSubscription.unsubscribe();
    }
    if (this.tipoDocumentoSubscription) {
      this.tipoDocumentoSubscription.unsubscribe();
    }
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
    }
  }
}
