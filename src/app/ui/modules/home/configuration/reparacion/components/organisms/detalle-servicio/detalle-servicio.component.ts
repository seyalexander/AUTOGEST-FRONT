import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-servicio',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './detalle-servicio.component.html',
  styleUrl: './detalle-servicio.component.css'
})
export class DetalleServicioComponent {
  @Output() serviceRegistered = new EventEmitter<{ descripcion: string, precio: number }>();

  serviceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.serviceForm = this.fb.group({
      descripcion: [''],
      precio: [0]
    });
  }

  onSubmit() {
    if (this.serviceForm.valid) {
      this.serviceRegistered.emit(this.serviceForm.value);
    }
  }
}
