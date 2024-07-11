import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEmpleadoComponent } from './cart-empleado.component';

describe('CartEmpleadoComponent', () => {
  let component: CartEmpleadoComponent;
  let fixture: ComponentFixture<CartEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartEmpleadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
