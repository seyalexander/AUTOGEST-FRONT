import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReparacionPageComponent } from './lista-reparacion-page.component';
import { TableDatosReparacionComponent } from '../../organisms/table-datos-reparacion/table-datos-reparacion.component';
import { RegistroDatosReparacionPageComponent } from '../registro-datos-reparacion-page/registro-datos-reparacion-page.component';


describe('ListaReparacionPageComponent', () => {
  let component: ListaReparacionPageComponent;
  let fixture: ComponentFixture<ListaReparacionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [

        ListaReparacionPageComponent,
        TableDatosReparacionComponent,
        RegistroDatosReparacionPageComponent
    ],
    providers: [

    ]
});
    fixture = TestBed.createComponent(ListaReparacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
