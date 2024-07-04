import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-sin-datos',
  standalone: true,
  imports: [],
  templateUrl: './mensaje-sin-datos.component.html',
  styleUrl: './mensaje-sin-datos.component.css'
})
export class MensajeSinDatosComponent {
  @Input() title: String = ''
}
