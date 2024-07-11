import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartServicioComponent } from './cart-servicio.component';

describe('CartServicioComponent', () => {
  let component: CartServicioComponent;
  let fixture: ComponentFixture<CartServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
