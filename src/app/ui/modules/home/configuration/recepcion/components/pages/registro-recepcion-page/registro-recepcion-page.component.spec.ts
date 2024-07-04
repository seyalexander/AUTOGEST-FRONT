import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRecepcionPageComponent } from './registro-recepcion-page.component';

describe('RegistroRecepcionPageComponent', () => {
  let component: RegistroRecepcionPageComponent;
  let fixture: ComponentFixture<RegistroRecepcionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroRecepcionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroRecepcionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
