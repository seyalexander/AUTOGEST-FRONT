import { Component, Input } from '@angular/core';
import { choferesModel } from '../../../../../../../../domain/models/choferes/choferes.model';
import { clienteModel } from '../../../../../../../../domain/models/clientes/clientes.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-datos-choferes-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-datos-choferes-2.component.html',
  styleUrl: './table-datos-choferes-2.component.css'
})
export class TableDatosChoferes2Component {
  @Input() dataChoferes:  Array<choferesModel> = [];
}
