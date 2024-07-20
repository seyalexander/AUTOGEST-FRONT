import { Component } from '@angular/core';
import html3canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

@Component({
  selector: 'app-reporte-reparacion',
  standalone: true,
  imports: [],
  templateUrl: './reporte-reparacion.component.html',
  styleUrl: './reporte-reparacion.component.css'
})
export class ReporteReparacionComponent {
  constructor() {
    this.downloadPDF()
  }

  public downloadPDF(): void {
    const doc = new jsPDF();
    doc.text("edwin alexander", 10,10)
    doc.save("reporte-reparacion.pdf")
  }
}
