import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { TableDatosReparacionComponent } from '../../organisms/table-datos-reparacion/table-datos-reparacion.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { reparacionModel } from '../../../../../../../../domain/models/reparacion/reparacion.model';
import { GetReparacionUseCases } from '../../../../../../../../domain/useCase/get-reparacion-use-case';
import { RegistroDatosReparacionPageComponent } from '../registro-datos-reparacion-page/registro-datos-reparacion-page.component';
import { GetTipoEmpleadosUseCases } from '../../../../../../../../domain/useCase/get-empleado-use-case';

@Component({
    selector: 'app-lista-reparacion-page',
    templateUrl: './lista-reparacion-page.component.html',
    styleUrls: ['./lista-reparacion-page.component.css'],
    standalone: true,
    imports: [
      HeaderPagesConfigurationComponent,
      TableDatosReparacionComponent,
      RegistroDatosReparacionPageComponent
    ]
})
export class ListaReparacionPageComponent {
  nombrePagina: String = 'REPARACIÓN'
  reparacionPDF: reparacionModel = {} as reparacionModel
  datosReparacionlista: Array <reparacionModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor ( private _getReparacionUseCase: GetReparacionUseCases ) {
    // this.downloadPDF()
  }


  ngOnInit():  void {
    const ObservarDatosModeloAutos$ = this._getReparacionUseCase.getAllReparacion().
    subscribe( Response => {
        this.datosReparacionlista = Response;
        console.log(Response);

      })

    this.listObservers$ = [ObservarDatosModeloAutos$]

  }

  reparacionSeleccionada: reparacionModel = {} as reparacionModel;

  clienteSeleccionado(idReparacion: number) {
    this._getReparacionUseCase
      .getById(idReparacion)
      .subscribe((Response: reparacionModel) => {
        this.reparacionPDF = Response;
        console.log(Response);

        this.exportToPDF()
      });
  }



//   exportToPDF() {
//     const doc = new jsPDF();

//     // Opcional: Establecer el título del documento
//     doc.text('REPARACION', 14, 16);

//     // Definir las columnas para la tabla principal
//     const columns = [
//       { title: 'RAZON SOCIAL', dataKey: 'razon_Social' },
//       { title: 'MATRICULA', dataKey: 'matricula' },
//       { title: 'CHOFER', dataKey: 'chofer' },
//     ];

//     // Generar la tabla principal
//     (doc as any).autoTable({
//       head: [columns.map(col => col.title)],
//       body: [
//         [
//           this.reparacionPDF.id_Orden_Ingreso_Fk.id_Prediagnostico_Fk.id_Recepcion_Fk.id_Cita_Fk.id_Auto_Fk.idClienteFk.razon_Social,
//           this.reparacionPDF.id_Orden_Ingreso_Fk.id_Prediagnostico_Fk.id_Recepcion_Fk.id_Cita_Fk.id_Auto_Fk.matricula,
//           this.reparacionPDF.id_Orden_Ingreso_Fk.id_Prediagnostico_Fk.id_Recepcion_Fk.id_Cita_Fk.id_Chofer_Fk.nombres
//         ]
//       ],
//       startY: 25, // Ajuste para no solaparse con el título
//       styles: { // Estilos generales
//         font: 'helvetica',
//         fontSize: 10,
//         cellPadding: 4,
//         textColor: [34, 34, 34],
//         fillColor: [255, 255, 255],
//         lineColor: [44, 62, 80],
//         lineWidth: 0.2,
//       },
//       headStyles: { // Estilos de la cabecera
//         fillColor: [52, 152, 219], // Azul claro
//         textColor: [255, 255, 255], // Blanco
//         fontSize: 12,
//         fontStyle: 'bold',
//         halign: 'center' // Alineación horizontal centrada
//       },
//       alternateRowStyles: { // Estilos de filas alternas
//         fillColor: [245, 245, 245]
//       },
//       columnStyles: { // Estilos específicos por columna
//         0: { cellWidth: 'auto' },
//         1: { cellWidth: 'auto' },
//         2: { cellWidth: 'auto' }
//       }
//     });

//     // Espacio antes de la siguiente tabla
//     let finalY = (doc as any).lastAutoTable.finalY + 10;

//     // Definir las columnas para la tabla de empleados
//     const employeeColumns = [
//       { title: 'NOMBRES', dataKey: 'nombres' },
//       { title: 'APELLIDOS', dataKey: 'apellidos' },
//       { title: 'DNI', dataKey: 'numero_Documento' },
//       { title: 'TELEFONO', dataKey: 'telefono' },
//     ];

//     // Generar el cuerpo de la tabla de empleados
//     const employeeBody = this.reparacionPDF.listaEmpleado.map(emp => [
//       emp.id_Empleado_Fk.nombres,
//       emp.id_Empleado_Fk.apellidos,
//       emp.id_Empleado_Fk.numero_Documento,
//       emp.id_Empleado_Fk.telefono
//     ]);

//     // Generar la tabla de empleados
//     (doc as any).autoTable({
//       head: [employeeColumns.map(col => col.title)],
//       body: employeeBody,
//       startY: finalY, // Ajuste para comenzar después de la tabla anterior
//       styles: { // Estilos generales
//         font: 'helvetica',
//         fontSize: 10,
//         cellPadding: 4,
//         textColor: [34, 34, 34],
//         fillColor: [255, 255, 255],
//         lineColor: [44, 62, 80],
//         lineWidth: 0.2,
//       },
//       headStyles: { // Estilos de la cabecera
//         fillColor: [52, 152, 219], // Azul claro
//         textColor: [255, 255, 255], // Blanco
//         fontSize: 12,
//         fontStyle: 'bold',
//         halign: 'center' // Alineación horizontal centrada
//       },
//       alternateRowStyles: { // Estilos de filas alternas
//         fillColor: [245, 245, 245]
//       },
//       columnStyles: { // Estilos específicos por columna
//         0: { cellWidth: 'auto' },
//         1: { cellWidth: 'auto' },
//         2: { cellWidth: 'auto' },
//         3: { cellWidth: 'auto' }
//       }
//     });

//     // Actualizar el valor de finalY después de agregar la tabla de empleados
//     finalY = (doc as any).lastAutoTable.finalY + 10;

//     // Definir las columnas para la tabla de productos
//     const productColumns = [
//       { title: 'NOMBRE PRODUCTO', dataKey: 'nombreProducto' },
//       { title: 'CANTIDAD', dataKey: 'cantidad' },
//       { title: 'PRECIO UNITARIO', dataKey: 'precioUnitario' },
//     ];

//     // Generar el cuerpo de la tabla de productos
//     const productBody = this.reparacionPDF.listaProductos.map(product => [
//       product.id_Producto_Fk.descripcion,
//       product.cantidad,
//       product.precio_Producto,
//     ]);

//     // Generar la tabla de productos
//     (doc as any).autoTable({
//       head: [productColumns.map(col => col.title)],
//       body: productBody,
//       startY: finalY, // Ajuste para comenzar después de la tabla anterior
//       styles: { // Estilos generales
//         font: 'helvetica',
//         fontSize: 10,
//         cellPadding: 4,
//         textColor: [34, 34, 34],
//         fillColor: [255, 255, 255],
//         lineColor: [44, 62, 80],
//         lineWidth: 0.2,
//       },
//       headStyles: { // Estilos de la cabecera
//         fillColor: [52, 152, 219], // Azul claro
//         textColor: [255, 255, 255], // Blanco
//         fontSize: 12,
//         fontStyle: 'bold',
//         halign: 'center' // Alineación horizontal centrada
//       },
//       alternateRowStyles: { // Estilos de filas alternas
//         fillColor: [245, 245, 245]
//       },
//       columnStyles: { // Estilos específicos por columna
//         0: { cellWidth: 'auto' },
//         1: { cellWidth: 'auto' },
//         2: { cellWidth: 'auto' },
//         3: { cellWidth: 'auto' }
//       }
//     });

//     // Actualizar el valor de finalY después de agregar la tabla de productos
//     finalY = (doc as any).lastAutoTable.finalY + 10;

//     // Definir las columnas para la tabla de servicios
//     const serviceColumns = [
//       { title: 'DESCRIPCION', dataKey: 'descripcion' },
//       { title: 'PRECIO', dataKey: 'precio' },
//     ];

//     // Generar el cuerpo de la tabla de servicios
//     const serviceBody = this.reparacionPDF.listaServicio.map(service => [
//       service.detalle_Servicio,
//       service.precio_Servicio
//     ]);

//     // Generar la tabla de servicios
//     (doc as any).autoTable({
//       head: [serviceColumns.map(col => col.title)],
//       body: serviceBody,
//       startY: finalY, // Ajuste para comenzar después de la tabla anterior
//       styles: { // Estilos generales
//         font: 'helvetica',
//         fontSize: 10,
//         cellPadding: 4,
//         textColor: [34, 34, 34],
//         fillColor: [255, 255, 255],
//         lineColor: [44, 62, 80],
//         lineWidth: 0.2,
//       },
//       headStyles: { // Estilos de la cabecera
//         fillColor: [52, 152, 219], // Azul claro
//         textColor: [255, 255, 255], // Blanco
//         fontSize: 12,
//         fontStyle: 'bold',
//         halign: 'center' // Alineación horizontal centrada
//       },
//       alternateRowStyles: { // Estilos de filas alternas
//         fillColor: [245, 245, 245]
//       },
//       columnStyles: { // Estilos específicos por columna
//         0: { cellWidth: 'auto' },
//         1: { cellWidth: 'auto' },
//         2: { cellWidth: 'auto' }
//       }
//     });

//     // Guardar el PDF
//     window.open(doc.output('bloburl'), '_blank');
// }

exportToPDF() {
  const doc = new jsPDF();

  // Añadir encabezado
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Reporte de Reparación', 105, 15);

  // Añadir subtítulo
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 14, 25);

  // Espacio entre encabezado y primera tabla
  let finalY = 35;

  // Sección: Información Principal
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Información Principal', 14, finalY);
  finalY += 6;

  // Definir las columnas para la tabla principal
  const columns = [
    { title: 'RAZON SOCIAL', dataKey: 'razon_Social' },
    { title: 'MATRICULA', dataKey: 'matricula' },
    { title: 'CHOFER', dataKey: 'chofer' },
  ];

  // Generar la tabla principal
  (doc as any).autoTable({
    head: [columns.map(col => col.title)],
    body: [
      [
        this.reparacionPDF.id_Orden_Ingreso_Fk.id_Prediagnostico_Fk.id_Recepcion_Fk.id_Cita_Fk.id_Auto_Fk.idClienteFk.razon_Social,
        this.reparacionPDF.id_Orden_Ingreso_Fk.id_Prediagnostico_Fk.id_Recepcion_Fk.id_Cita_Fk.id_Auto_Fk.matricula,
        this.reparacionPDF.id_Orden_Ingreso_Fk.id_Prediagnostico_Fk.id_Recepcion_Fk.id_Cita_Fk.id_Chofer_Fk.nombres
      ]
    ],
    startY: finalY,
    styles: {
      font: 'helvetica',
      fontSize: 10,
      cellPadding: 4,
      textColor: [34, 34, 34],
      fillColor: [255, 255, 255],
      lineColor: [44, 62, 80],
      lineWidth: 0.2,
    },
    headStyles: {
      fillColor: [52, 152, 219],
      textColor: [255, 255, 255],
      fontSize: 12,
      fontStyle: 'bold',
      halign: 'center'
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245]
    },
    columnStyles: {
      0: { cellWidth: 'auto' },
      1: { cellWidth: 'auto' },
      2: { cellWidth: 'auto' }
    }
  });

  finalY = (doc as any).lastAutoTable.finalY + 10;

  // Sección: Empleados
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Empleados', 14, finalY);
  finalY += 6;

  // Definir las columnas para la tabla de empleados
  const employeeColumns = [
    { title: 'NOMBRES', dataKey: 'nombres' },
    { title: 'APELLIDOS', dataKey: 'apellidos' },
    { title: 'DNI', dataKey: 'numero_Documento' },
    { title: 'TELEFONO', dataKey: 'telefono' },
  ];

  // Generar el cuerpo de la tabla de empleados
  const employeeBody = this.reparacionPDF.listaEmpleado.map(emp => [
    emp.id_Empleado_Fk.nombres,
    emp.id_Empleado_Fk.apellidos,
    emp.id_Empleado_Fk.numero_Documento,
    emp.id_Empleado_Fk.telefono
  ]);

  // Generar la tabla de empleados
  (doc as any).autoTable({
    head: [employeeColumns.map(col => col.title)],
    body: employeeBody,
    startY: finalY,
    styles: {
      font: 'helvetica',
      fontSize: 10,
      cellPadding: 4,
      textColor: [34, 34, 34],
      fillColor: [255, 255, 255],
      lineColor: [44, 62, 80],
      lineWidth: 0.2,
    },
    headStyles: {
      fillColor: [52, 152, 219],
      textColor: [255, 255, 255],
      fontSize: 12,
      fontStyle: 'bold',
      halign: 'center'
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245]
    },
    columnStyles: {
      0: { cellWidth: 'auto' },
      1: { cellWidth: 'auto' },
      2: { cellWidth: 'auto' },
      3: { cellWidth: 'auto' }
    }
  });

  finalY = (doc as any).lastAutoTable.finalY + 10;

  // Sección: Productos
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Productos', 14, finalY);
  finalY += 6;

  // Definir las columnas para la tabla de productos
  const productColumns = [
    { title: 'NOMBRE PRODUCTO', dataKey: 'nombreProducto' },
    { title: 'CANTIDAD', dataKey: 'cantidad' },
    { title: 'PRECIO UNITARIO', dataKey: 'precioUnitario' },
  ];

  // Generar el cuerpo de la tabla de productos
  const productBody = this.reparacionPDF.listaProductos.map(product => [
    product.id_Producto_Fk.descripcion,
    product.cantidad,
    product.precio_Producto,
  ]);

  // Generar la tabla de productos
  (doc as any).autoTable({
    head: [productColumns.map(col => col.title)],
    body: productBody,
    startY: finalY,
    styles: {
      font: 'helvetica',
      fontSize: 10,
      cellPadding: 4,
      textColor: [34, 34, 34],
      fillColor: [255, 255, 255],
      lineColor: [44, 62, 80],
      lineWidth: 0.2,
    },
    headStyles: {
      fillColor: [52, 152, 219],
      textColor: [255, 255, 255],
      fontSize: 12,
      fontStyle: 'bold',
      halign: 'center'
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245]
    },
    columnStyles: {
      0: { cellWidth: 'auto' },
      1: { cellWidth: 'auto' },
      2: { cellWidth: 'auto' },
      3: { cellWidth: 'auto' }
    }
  });

  finalY = (doc as any).lastAutoTable.finalY + 10;

  // Sección: Servicios
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Servicios', 14, finalY);
  finalY += 6;

  // Definir las columnas para la tabla de servicios
  const serviceColumns = [
    { title: 'DESCRIPCION', dataKey: 'descripcion' },
    { title: 'PRECIO', dataKey: 'precio' },
  ];

  // Generar el cuerpo de la tabla de servicios
  const serviceBody = this.reparacionPDF.listaServicio.map(service => [
    service.detalle_Servicio,
    service.precio_Servicio
  ]);

  // Generar la tabla de servicios
  (doc as any).autoTable({
    head: [serviceColumns.map(col => col.title)],
    body: serviceBody,
    startY: finalY,
    styles: {
      font: 'helvetica',
      fontSize: 10,
      cellPadding: 4,
      textColor: [34, 34, 34],
      fillColor: [255, 255, 255],
      lineColor: [44, 62, 80],
      lineWidth: 0.2,
    },
    headStyles: {
      fillColor: [52, 152, 219],
      textColor: [255, 255, 255],
      fontSize: 12,
      fontStyle: 'bold',
      halign: 'center'
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245]
    },
    columnStyles: {
      0: { cellWidth: 'auto' },
      1: { cellWidth: 'auto' },
      2: { cellWidth: 'auto' }
    }
  });

  finalY = (doc as any).lastAutoTable.finalY + 10;

  // Añadir pie de página
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Reporte generado por el sistema AUTOGEST - Contacto: Claudio Paul Cruzado Esquivel', 14, 285);

  // Guardar el PDF
  window.open(doc.output('bloburl'), '_blank');
}


}
