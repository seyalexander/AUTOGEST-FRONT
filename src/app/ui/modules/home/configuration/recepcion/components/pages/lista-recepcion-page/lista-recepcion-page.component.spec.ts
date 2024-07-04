import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecepcionPageComponent } from './lista-recepcion-page.component';

describe('ListaRecepcionPageComponent', () => {
  let component: ListaRecepcionPageComponent;
  let fixture: ComponentFixture<ListaRecepcionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaRecepcionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaRecepcionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
