import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDatosEmpresaComponent } from './lista-datos-empresa.component';

describe('ListaDatosEmpresaComponent', () => {
  let component: ListaDatosEmpresaComponent;
  let fixture: ComponentFixture<ListaDatosEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ListaDatosEmpresaComponent]
});
    fixture = TestBed.createComponent(ListaDatosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
