import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeSinDatosComponent } from './mensaje-sin-datos.component';

describe('MensajeSinDatosComponent', () => {
  let component: MensajeSinDatosComponent;
  let fixture: ComponentFixture<MensajeSinDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeSinDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensajeSinDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
