import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosRolUsuariosComponent } from './table-datos-rol-usuarios.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('TableDatosRolUsuariosComponent', () => {
  let component: TableDatosRolUsuariosComponent;
  let fixture: ComponentFixture<TableDatosRolUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SharedModule, TableDatosRolUsuariosComponent]
});
    fixture = TestBed.createComponent(TableDatosRolUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
