import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosUsuariosComponent } from './table-datos-usuarios.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('TableDatosUsuariosComponent', () => {
  let component: TableDatosUsuariosComponent;
  let fixture: ComponentFixture<TableDatosUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SharedModule, TableDatosUsuariosComponent]
});
    fixture = TestBed.createComponent(TableDatosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
