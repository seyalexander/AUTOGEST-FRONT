import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFamiliaProductoPageComponent } from './lista-familia-producto-page.component';

describe('ListaFamiliaProductoPageComponent', () => {
  let component: ListaFamiliaProductoPageComponent;
  let fixture: ComponentFixture<ListaFamiliaProductoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListaFamiliaProductoPageComponent]
    });
    fixture = TestBed.createComponent(ListaFamiliaProductoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
