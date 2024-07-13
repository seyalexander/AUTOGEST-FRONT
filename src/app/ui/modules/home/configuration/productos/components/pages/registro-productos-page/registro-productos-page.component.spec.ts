import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProductosPageComponent } from './registro-productos-page.component';

describe('RegistroProductosPageComponent', () => {
  let component: RegistroProductosPageComponent;
  let fixture: ComponentFixture<RegistroProductosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroProductosPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroProductosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
