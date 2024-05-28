import { SharedModule } from 'src/app/UI/shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAutosPageComponent } from './lista-autos-page.component';
import { TableDatosAutosComponent } from '../../organisms/table-datos-autos/table-datos-autos.component';
import { RegistroDatosAutosPageComponent } from '../registro-datos-autos-page/registro-datos-autos-page.component';
import { ApplicationModule } from '@angular/core';


describe('ListaAutosPageComponent', () => {
  let component: ListaAutosPageComponent;
  let fixture: ComponentFixture<ListaAutosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ApplicationModule, SharedModule, ListaAutosPageComponent, TableDatosAutosComponent,
        RegistroDatosAutosPageComponent],
});
    fixture = TestBed.createComponent(ListaAutosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
