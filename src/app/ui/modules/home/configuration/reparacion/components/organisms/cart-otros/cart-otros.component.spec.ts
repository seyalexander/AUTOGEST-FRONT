import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOtrosComponent } from './cart-otros.component';

describe('CartOtrosComponent', () => {
  let component: CartOtrosComponent;
  let fixture: ComponentFixture<CartOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartOtrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
