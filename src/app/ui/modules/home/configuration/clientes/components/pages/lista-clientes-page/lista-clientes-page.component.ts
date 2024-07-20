import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableDatosClientesComponent } from '../../organisms/table-datos-clientes/table-datos-clientes.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { RegistroDatosClientesPageComponent } from '../registro-datos-clientes-page/RegistroDatosClientesPageComponent';
import { CommonModule } from '@angular/common';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';
import { GetClientesUseCases } from '../../../../../../../../domain/useCase/get-clientes-use-case';
import { AuthService } from '../../../../../../../../infraestrcuture/driven-adapter/login/auth.service';


@Component({
    selector: 'app-lista-clientes-page',
    templateUrl: './lista-clientes-page.component.html',
    styleUrls: ['./lista-clientes-page.component.css'],
    standalone: true,
    imports: [
      RegistroDatosClientesPageComponent,
      HeaderPagesConfigurationComponent,
      TableDatosClientesComponent,
      NgxPaginationModule,
      CommonModule
    ]
})
export class ListaClientesPageComponent implements OnDestroy {

  nombrePagina: String = 'CLIENTES';
  isLoading = false;
  datosClienteslista: Array<clienteModel> = [];
  listObservers$: Array<Subscription> = [];
  p: number = 1;
  cantDatosPorPagina: number = 7;
  mensajeServidor: String = '';
  userNombre: String = ''
  userLoginOn : boolean = false;
  userLoginId : number  = 0 ;


  private _getClientesUseCase = inject(GetClientesUseCases);
  private loginService = inject(AuthService);

  private clientesSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {

        this.userLoginOn = userLoginOn;
        this.loginService.currentUserIdEmpleado.subscribe({
          next: (userLoginId) => {
            this.userLoginId = userLoginId;

            if (userLoginId != 0 || userLoginId != null) {
              this.obtenerClientesExito()
            }
          }
        })


      }
    })

  }

  obtenerClientesExito(): void {
    this.isLoading = true;
    this.clientesSubscription = this._getClientesUseCase.getAllClientes().
      subscribe((Response: clienteModel[]) => {
        this.datosClienteslista = Response;
        this.isLoading = false;
      })
  }

  clienteSeleccionada: clienteModel = {} as clienteModel;

  clienteSeleccionado(idCliente: number) {
    this._getClientesUseCase
      .getById(idCliente)
      .subscribe((Response: clienteModel) => {
        this.clienteSeleccionada = Response;
        this.exportToPDF()
      });
  }



  exportToPDF() {
    const doc = new jsPDF();

    // Opcional: Establecer el título del documento
    doc.text('Lista de Clientes', 14, 16);

    // Definir las columnas
    const columns = [
      { title: 'RAZON SOCIAL', dataKey: 'razon_social' },
      { title: 'REPRESENTANTE', dataKey: 'representante' },
      { title: 'TELÉFONO', dataKey: 'telefono' }
    ];


    // Generar la tabla
     //Generar la tabla
     (doc as any).autoTable({
      head: [columns.map(col => col.title)],
      body: [[this.clienteSeleccionada.razon_Social, this.clienteSeleccionada.representante_Legal, this.clienteSeleccionada.telefono]],
      startY: 25, // Ajuste para no solaparse con el título
      styles: { // Estilos generales
        font: 'helvetica',
        fontSize: 10,
        cellPadding: 4,
        textColor: [34, 34, 34],
        fillColor: [255, 255, 255],
        lineColor: [44, 62, 80],
        lineWidth: 0.2,
      },
      headStyles: { // Estilos de la cabecera
        fillColor: [52, 152, 219], // Azul claro
        textColor: [255, 255, 255], // Blanco
        fontSize: 12,
        fontStyle: 'bold',
        halign: 'center' // Alineación horizontal centrada
      },
      alternateRowStyles: { // Estilos de filas alternas
        fillColor: [245, 245, 245]
      },
      columnStyles: { // Estilos específicos por columna
        0: { cellWidth: 'auto' },
        1: { cellWidth: 'auto' },
        2: { cellWidth: 'auto' }
      }
    });

    // Guardar el PDF
    // doc.save('clientes.pdf');
    window.open(doc.output('bloburl'), '_blank');
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  regresarListaClientes() {
    window.location.reload();
  }

  ngOnDestroy(): void {
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
    }
  }
}
