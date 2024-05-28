import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosPageComponent } from './lista-productos-page.component';

describe('ListaProductosPageComponent', () => {
  let component: ListaProductosPageComponent;
  let fixture: ComponentFixture<ListaProductosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListaProductosPageComponent]
    });
    fixture = TestBed.createComponent(ListaProductosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
